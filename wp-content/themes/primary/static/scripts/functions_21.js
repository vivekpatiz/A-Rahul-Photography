function showmore(e){var n=$(e).parents(".js-gallery");$(e).parent().remove(),$(n).find(".js-more-content").removeClass("hidden"),$(".js-more-content").each(function(e,n){var t=$(n).find(".c-thumbnail__img").attr("data-source");$(n).find(".c-thumbnail__img").attr("src",t)}).promise().done(function(){setSquare(),setBgCover()})}function sliderHeightSet(){var e=0;$(window).width()<768?($(".js-main-banner__content").each(function(n,t){var i=$(t).find("h1").height();i+=$(t).find("p").height(),(i+=$(t).find("a").height())>e&&(e=i)}),$(".js-main-banner").height(e+408)):$(".js-main-banner").removeAttr("style")}function serviceOffsetMaker(){var e=$(window).width();if(($(".js-set-offset-left").length||$(".js-set-offset-right").length)&&($(".js-set-offset-left").removeAttr("style"),$(".js-set-offset-right").removeAttr("style"),e>=768)){var n=$(".js-get-offset").offset().left;$(".js-set-offset-left").css("padding-left",n),$(".js-set-offset-right").css("padding-right",n)}}function setSquare(){$(".js-set-square").each(function(e,n){var t=$(n).width();$(n).height(t)})}function setRect(){$(".js-set-rect").each(function(e,n){var t=$(n).width()/1.618;$(n).height(t)})}function setMobileNav(){var e=$(window).height();$(window).width()<768&&$(".js-navigation > ul").height(e-56)}function setBgCover(){$(".js-set-cover").removeAttr("style"),$(".js-set-cover").each(function(e,n){var t=$(n).height(),i=$(n).width(),a=$(n).parent().height(),o=$(n).parent().width();a/o>=t/i?$(n).height(a+2):$(n).width(o+2),$(n).addClass("is-visible")})}function setGalleryLightbox(){$(".c-richtext .gallery").each(function(e,n){var t="#"+$(n).attr("id");$(".gallery-item",$(n)).each(function(e,n){var t=$(n).find("img").attr("width"),i=$(n).find("img").attr("height");$(n).attr("data-attribute",e);var a=$(n).find("a");$(n).prepend(a),$(n).find(".gallery-icon").remove(),console.log(t+"x"+i),$(n).find("a").attr("data-size",t+"x"+i)}),initPhotoSwipeFromDOM(t)})}function setBlockGalleryLightbox(){$(".c-richtext .blockgallery").each(function(e,n){var t=$(n).children("ul");console.log(t),$(".blockgallery--item").each(function(e,n){$(n).find("a").attr("data-size",imgW+"x"+imgH)})})}function setMasonryDownload(){$(".js-masonry-gallery--download").each(function(e,n){$(n).find(".c-masonry__block").each(function(e,n){var t=$(n).attr("href");$(n).prepend('<div class="c-masonry__download js-masonry__download" data-href="'+t+'" title="Download"><img src="/wp-content/themes/primary/static/images/icon-download.svg" alt="icon - download"></div>')})}),$(".c-masonry__block").on("click",function(e){$(e.target).is(".js-masonry__download")&&e.preventDefault()}),$("body").on("click",".js-masonry__download",function(e){e.stopPropagation();let n=$(this).attr("data-href");window.open(n,"_blank")})}function setGalleryMasonry(){$(".c-richtext .gallery").each(function(e,n){var t=$(window).width(),i=0,a=0,o=[],r="#"+$(n).attr("id");2==$(".gallery-item",$(n)).length&&$(n).addClass("two-block"),$(".gallery-item",$(n)).each(function(e,n){i+=$(n).outerHeight(),o.push($(n).outerHeight());var t=$(n).find("img").width(),r=$(n).find("img").height();$(n).attr("data-attribute",e);var s=$(n).find("a");$(n).prepend(s),$(n).find(".gallery-icon").remove(),$(n).find("a").attr("data-size",t+"x"+r),a++}),a>4?(t>=768&&(i=i/3+200),t<768&&(i=i/2+100)):(t>=768&&(i=Math.max.apply(null,o)),t<768&&(i=i/2+50)),initPhotoSwipeFromDOM(r),$(r).css("max-height",i+"px"),$(r).find("img").addClass("is-active")})}function setMasonry(){var e=$(window).width(),n=0,t=0,i=[];$(".js-masonry .js-masonry__item").each(function(e,a){n+=$(a).outerHeight(),i.push($(a).outerHeight()),t++}),t>4?(e>=768&&(n=n/3+100),e<768&&(n=n/2+50)):(e>=768&&(n=Math.max.apply(null,i)),e<768&&(n=n/2+50)),$(".js-masonry").css("max-height",n+"px"),$(".js-masonry__img").addClass("is-active")}$(document).ready(function(){$(".js-slider").slick({slidesToShow:4,prevArrow:'<button class="c-gallery-slider__arrow c-gallery-slider__arrow--prev"><ion-icon name="arrow-dropleft"></ion-icon></button>',nextArrow:'<button class="c-gallery-slider__arrow c-gallery-slider__arrow--next"><ion-icon name="arrow-dropright"></ion-icon></button>',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".lazy").Lazy(),$("input[name^='input_1006']").length&&($("input[name^='input_1006']").prop("readonly",!0),$("input[name^='input_1006']").hunterTimePicker(),$(document).on("click",".add_repeater_item",function(){$("input[name^='input_1006']").prop("readonly",!0),$("input[name^='input_1006']").hunterTimePicker()}));$("[id|='input_1_1001']").datepicker({changeMonth:!0,changeYear:!0,prevText:'<ion-icon name="ios-arrow-dropleft"></ion-icon>',nextText:'<ion-icon name="ios-arrow-dropright"></ion-icon>'}),$(document).on("click",".add_repeater_item",function(){$("[id|='input_1_1001']").each(function(e,n){$(n).removeClass("hasDatepicker"),$(n).attr("autocomplete","off"),$(n).datepicker({changeMonth:!0,changeYear:!0,prevText:'<ion-icon name="ios-arrow-dropleft"></ion-icon>',nextText:'<ion-icon name="ios-arrow-dropright"></ion-icon>'})}),0}),$("[id|='input_38_4002']").datepicker({changeMonth:!0,changeYear:!0,nextText:'<ion-icon name="ios-ios-arrow-dropright"></ion-icon>'}),$(document).on("click",".add_repeater_item",function(){$("[id|='input_38_4002']").each(function(e,n){$(n).removeClass("hasDatepicker"),$(n).attr("autocomplete","off"),$(n).datepicker({changeMonth:!0,changeYear:!0,prevText:'<ion-icon name="ios-arrow-dropleft"></ion-icon>',nextText:'<ion-icon name="ios-arrow-dropright"></ion-icon>'})}),0}),$(".js-showmore").click(function(e){e.preventDefault(),showmore($(this))}),sliderHeightSet();var e=0;$(".js-mobile-menu-trigger").click(function(n){n.preventDefault(),$(this).hasClass("is-active")?($(".js-navigation > ul").removeClass("is-active"),$(this).removeClass("is-active"),$("body").removeClass("scroll-disable"),$(this).children("span").removeClass("ion-ios-close"),$(this).children("span").addClass("ion-ios-menu"),$("html, body").scrollTop(e)):(e=$(window).scrollTop(),$(".js-navigation > ul").addClass("is-active"),$(this).addClass("is-active"),$("body").addClass("scroll-disable"),$(this).children("span").toggleClass("ion-ios-menu ion-ios-close"),$(this).children("span").addClass("ion-ios-close"),$(this).children("span").removeClass("ion-ios-menu"))}),$(".js-nav-icon").click(function(e){e.preventDefault(),$(this).parent().siblings("ul").toggleClass("is-active"),$(this).toggleClass("is-active")}),document.addEventListener("touchstart",function(){},!0),$(".js-mobile-filter").change(function(){window.location.href=$(this).val()}),initPhotoSwipeFromDOM(".js-gallery"),$(".js-main-banner").homeSlider(),$(".js-testimonial-slider").slick({infinite:!0,slidesToShow:2,slideToScroll:1,dots:!0,nextArrow:'<button type="button" class="slick-next"><ion-icon name="chevron-forward"></ion-icon></button>',prevArrow:'<button type="button" class="slick-prev"><ion-icon name="chevron-back"></ion-icon></button>',responsive:[{breakpoint:767,settings:{slidesToShow:1}}]})}),jQuery(document).on("gform_confirmation_loaded",function(e,n){alert("form submitted")}),$(window).on("load",function(){setDestinationBanner(),$(".ginput_container_select").each(function(e,n){$(n).append('<ion-icon class="ginput_container_select-icon" name="arrow-dropdown"></ion-icon>')}),$(".c-breadcrumb span").each(function(e,n){$(n).children("a").append('<ion-icon class="c-breadcrumb__icon" name="arrow-dropright"></ion-icon>')}),setGalleryLightbox(),setBlockGalleryLightbox(),setSquare(),setRect(),setBgCover(),serviceOffsetMaker(),sliderHeightSet(),setMasonryDownload(),$(".gallery").masonry(),$(".js-masonry-gallery").masonry()}),$(window).resize(function(){setDestinationBanner(),setGalleryLightbox(),setSquare(),setRect(),setBgCover(),serviceOffsetMaker(),sliderHeightSet()}),$.fn.homeSlider=function(){var e,n=1,t=1,i=$(this).find(".js-main-banner__img-block").length,a=$(this),o=6e3;function r(a){n=a,e=setInterval(function(){s(n,t),n==i?n=1:n++},o)}function s(e,n){t=e,function(e,n){$(a).find(".js-main-banner__img-block").removeClass("is-active"),null!=n&&($(a).find(".js-main-banner__img-block").removeClass("slide-out"),$(a).find(".js-main-banner__img-block:nth-child("+n+")").addClass("slide-out"));$(a).find(".js-main-banner__img-block:nth-child("+e+")").addClass("is-active"),null!=n&&setTimeout(function(){$(a).find(".js-main-banner__img-block:nth-child("+n+")").removeClass("slide-out")},1e3)}(e,n),function(e){$(a).find(".js-main-banner__content").removeClass("is-active"),$(a).find(".js-main-banner__content:nth-child("+e+")").find("h2").removeClass("is-active"),$(a).find(".js-main-banner__content:nth-child("+e+")").find("p").removeClass("is-active"),$(a).find(".js-main-banner__content:nth-child("+e+")").find("a").removeClass("is-active"),$(a).find(".js-main-banner__content:nth-child("+e+")").addClass("is-active"),setTimeout(function(){$(a).find(".js-main-banner__content:nth-child("+e+")").find("h2").addClass("is-active")},500),setTimeout(function(){$(a).find(".js-main-banner__content:nth-child("+e+")").find("p").addClass("is-active")},1e3),setTimeout(function(){$(a).find(".js-main-banner__content:nth-child("+e+")").find("a").addClass("is-active")},1500)}(e),function(e){$(a).find(".js-main-banner__dots-item").find("a").removeClass("is-active"),$(a).find(".js-main-banner__dots-item:nth-child("+e+")").find("a").addClass("is-active")}(e)}s(n),r(n=2),$(".js-main-banner__dots-link").click(function(n){n.preventDefault(),clearInterval(e);var a=parseInt($(this).attr("data-trigger"))+1,o=a+1;s(a,t),o>i&&(o=1),r(o)})};var initPhotoSwipeFromDOM=function(e){for(var n=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var n=function e(n,t){return n&&(t(n)?n:e(n.parentNode,t))}(e.target||e.srcElement,function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()});if(n){var i=n.parentNode,a=n.parentNode.childNodes,o=a.length,r=0;if(""!=n.getAttribute("data-attribute")?index=n.getAttribute("data-attribute"):index,null==index)for(var s=0;s<o;s++)if(1===a[s].nodeType){if(a[s]===n){index=r;break}r++}return index>=0&&t(index,i),!1}},t=function(e,n,t,i){var a,o,r=document.querySelectorAll(".pswp")[0];if(o=function(e){for(var n,t,i,a,o=e.childNodes,r=o.length,s=[],l=0;l<r;l++)if("FIGURE"==o[l].tagName){if(1!==(n=o[l]).nodeType)continue;i=(t=n.children[0]).getAttribute("data-size").split("x"),a={src:t.getAttribute("href"),w:parseInt(i[0],10),h:parseInt(i[1],10)},n.children.length>1&&(a.title=n.children[1].innerHTML),t.children.length>0&&(a.msrc=t.children[0].getAttribute("src")),a.el=n,s.push(a)}return s}(n),a={galleryUID:n.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var n=o[e].el.getElementsByTagName("img")[0],t=window.pageYOffset||document.documentElement.scrollTop,i=n.getBoundingClientRect();return{x:i.left,y:i.top+t,w:i.width}}},i)if(a.galleryPIDs){for(var s=0;s<o.length;s++)if(o[s].pid==e){a.index=s;break}}else a.index=parseInt(e,10)-1;else a.index=parseInt(e,10);isNaN(a.index)||(t&&(a.showAnimationDuration=0),a.shareEl=!1,new PhotoSwipe(r,PhotoSwipeUI_Default,o,a).init())},i=document.querySelectorAll(e),a=0,o=i.length;a<o;a++)i[a].setAttribute("data-pswp-uid",a+1),i[a].onclick=n;var r=function(){var e=window.location.hash.substring(1),n={};if(e.length<5)return n;for(var t=e.split("&"),i=0;i<t.length;i++)if(t[i]){var a=t[i].split("=");a.length<2||(n[a[0]]=a[1])}return n.gid&&(n.gid=parseInt(n.gid,10)),n}();r.pid&&r.gid&&t(r.pid,i[r.gid-1],!0,!0)};function readImage(e){var n=$.Deferred(),t=e.get(0).files;if(t&&t[0]){var i=new FileReader;i.onload=function(e){n.resolve(e.target.result)},i.readAsDataURL(t[0])}else n.resolve(void 0);return n.promise()}function getSelectValueLabel(e,n){var t="";return e.children("option").each(function(e,i){$(i).val()==n&&(t=$(i).text())}),t}function getValueDescription(e,n){var t="";return e.children("option").each(function(e,i){$(i).val()==n&&(t=$(i).attr("data-description"))}),t}function getValueIndex(e,n){var t="";return e.children("option").each(function(e,i){$(i).val()==n&&(t=$(i).attr("data-index"))}),t}function getAddress(e){var n="";return"Chennai"==e&&(n="52/41, Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034"),"Bangalore"==e&&(n="#A-404, Opp. St. Rock Church, Chelkere Main Road, Behind Kalyan Nagar Bus Depot Ring Road, Bangalore, Karnataka - 560 043."),"Coimbatore"==e&&(n="1547, Trichy Rd, Nadar Colony, Ramanathapuram, Coimbatore, Tamil Nadu 641018"),"Hyderabad"==e&&(n="Road no. 2 Banjara Hills above Colour Plus show room, opposite Park Hyatt, BNR Colony, Venkat Nagar, Banjara Hills, Hyderabad, Telangana 500034"),n}function fieldFileSizeValidate(e,n,t){var i=$(e),a=i.data("max-size");if(i.get(0).files.length)return!(i.get(0).files[0].size>a)||($.featherlight('<div id="mylightbox" class="c-alert-modal">\n                                <div class="c-richtext mb-0">\n                                    <p>'+n+" file size should not be more than "+t+'</p>\n                                </div>\n                                <div class="text-center">\n                                    <a href="#" onclick="$.featherlight.current().close(); return false;" class="c-button c-button--secondary mb-0 w-24">Ok</a>\n                                </div>\n                            </div>',{}),!1)}function setDestinationBanner(){var e=$(".js-destination-section"),n=$(".js-destination-banner"),t=$(window).width();$(n).removeAttr("style"),e.height()>n.height()&&$(n).height(e.height()),t<1200&&$(n).removeAttr("style")}