$(window).on('load', function () {
    var $preloader = jQuery('#bt-preloader'),
        $spinner = $preloader.find('.bt-preloadericon');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});
(function ($) {

    "use strict";


    // Form
    var contactForm = function () {
        if ($('#contactForm').length > 0) {
            $("#contactForm").validate({
                rules: {
                    name: "required",
                    subject: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 5
                    }
                },
                messages: {
                    name: "Please enter your name",
                    subject: "Please enter your subject",
                    email: "Please enter a valid email address",
                    message: "Please enter a message"
                },
                /* submit via ajax */

                submitHandler: function (form) {
                    var $submit = $('.submitting'),
                        waitText = 'Submitting...';

                    $.ajax({
                        type: "POST",
                        url: "php/sendEmail.php",
                        data: $(form).serialize(),

                        beforeSend: function () {
                            $submit.css('display', 'block').text(waitText);
                        },
                        success: function (msg) {
                            if (msg == 'OK') {
                                $('#form-message-warning').hide();
                                setTimeout(function () {
                                    $('#contactForm').fadeIn();
                                }, 1000);
                                setTimeout(function () {
                                    $('#form-message-success').fadeIn();
                                }, 1400);

                                setTimeout(function () {
                                    $('#form-message-success').fadeOut();
                                }, 8000);

                                setTimeout(function () {
                                    $submit.css('display', 'none').text(waitText);
                                }, 1400);

                                setTimeout(function () {
                                    $('#contactForm').each(function () {
                                        this.reset();
                                    });
                                }, 1400);

                            } else {
                                $('#form-message-warning').html(msg);
                                $('#form-message-warning').fadeIn();
                                $submit.css('display', 'none');
                            }
                        },
                        error: function () {
                            $('#form-message-warning').html("Something went wrong. Please try again.");
                            $('#form-message-warning').fadeIn();
                            $submit.css('display', 'none');
                        }
                    });
                } // end submitHandler

            });
        }
    };
    contactForm();

})(jQuery);

$(document).ready(function () {

    var mmenuActive = false;

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    $('.hamburger').click(function () {
        mmenuActive = !mmenuActive;
        $(this).toggleClass('is-active', mmenuActive);
        $('.bt-nav').toggleClass('expanded', mmenuActive);

        if (mmenuActive) {
            var tlMenu = new TimelineLite();
            tlMenu.set($(".mmenu li"), { y: 80, opacity: 0 });
            $(".mmenu li").each(function (index, element) {
                tlMenu.to(element, 0.5, { y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut }, index * 0.1)
            });
        } else {
            var tlMenu = new TimelineLite();
            $(".mmenu li").each(function (index, element) {
                tlMenu.to(element, 0.25, { y: -80, opacity: 0, ease: Power2.easeIn }, index * 0.05)
            });
        }
    });

    var indexRouter = function () {

        $('.section-image').each(function () {
            var image = $(this).data('src');
            $(this).css({ 'background-image': 'url(' + image + ')' });
        });

        var maxTilt = 1.5;
        var mouseX, mouseY;
        $(document).on("mousemove", function (event) {
            mouseX = event.pageX;
            mouseY = event.pageY;
        });
        $('#showcase-tilt').each(function () {
            var thisWidth = $(this).width();
            var thisHeight = $(this).height();
            var thisOffset = $(this).offset();
            $(document).mousemove(function () {
                var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
                var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;
                TweenMax.to('#showcase-tilt', 1, { rotationY: horTilt, rotationX: verTilt, scale: 1.05, ease: Power1.easeOut });
            });
        });

        var interleaveOffset = 0.5;

        var titles = [];
        var subtitle = [];
        var counter = [];
        $('#showcase-slider .swiper-slide').each(function (i) {
            titles.push($(this).data('title'))
            subtitle.push($(this).data('subtitle'))
            counter.push($(this).data('number'))
        });

        var swiperOptions = {
            loop: true,
            speed: 1000,
            direction: 'horizontal',
            grabCursor: true,
            resistance: true,
            resistanceRatio: 0.6,
            mousewheel: true,
            keyboard: true,
            watchSlidesProgress: true,
            simulateTouch: false,
            effect: 'slide',
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-page',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="tab__link ' + className + '">' + '<div class="swiper-info"><div class="subtitle">' + subtitle[index] + '</div>' + '<div class="title">' + titles[index] + '</div></div>' + '<div class="counter-wrap">' + '<div class="counter">0' + counter[index] + ' <span>|</span> 0' + $('.swiper-wrapper').data('slides') + '</div>' + '</div>' + '</div>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                progress: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
                    }
                },
                touchStart: function () {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function (speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
                    }
                },
                init: function () {
                    setTimeout(function () {
                        TweenMax.to($('.swiper-pagination-bullet-active').find('.title span'), 0, { scale: 1, x: 0, opacity: 1, ease: Power2.easeInOut });
                        TweenMax.to($('.swiper-pagination-bullet-active').find('.subtitle'), 0, { x: 0, opacity: 1, delay: 0.3, ease: Power2.easeIn });
                    }, 100);
                },
                slideNextTransitionStart: function () {
                    var prevslidetitle = new TimelineLite();
                    prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span'), 0.5, { scale: 0.9, x: -100, opacity: 0, ease: Power2.easeInOut }, 0.02)
                    var prevslidecaption = new TimelineLite();
                    prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.5, { x: -20, opacity: 0, delay: 0.3, ease: Power2.easeIn }, 0.02)

                    var activeslidetitle = new TimelineLite();
                    activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span'), 0.5, { scale: 1, x: 0, opacity: 1, scale: 1, delay: 0.3, ease: Power2.easeOut }, 0.02)
                    var activeslidecaption = new TimelineLite();
                    activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, { x: 0, opacity: 1, scale: 1, delay: 0.6, ease: Power2.easeOut }, 0.02)

                    var nextslidetitle = new TimelineLite();
                    nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span'), 0.5, { scale: 1.1, x: 100, opacity: 0, ease: Power2.easeInOut }, 0.02)
                    var nextslidecaption = new TimelineLite();
                    nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.5, { x: 20, opacity: 0, delay: 0.3, ease: Power2.easeIn }, 0.02)
                },
                slidePrevTransitionStart: function () {
                    var prevslidetitle = new TimelineLite();
                    prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title span'), 0.5, { scale: 1.1, x: -100, opacity: 0, ease: Power2.easeInOut }, -0.02)
                    var prevslidecaption = new TimelineLite();
                    prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.5, { x: -20, opacity: 0, delay: 0.3, ease: Power2.easeIn }, -0.02)

                    var activeslidetitle = new TimelineLite();
                    activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title span'), 0.5, { scale: 1, x: 0, opacity: 1, scale: 1, delay: 0.5, ease: Power2.easeOut }, -0.02)
                    var activeslidecaption = new TimelineLite();
                    activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, { x: 0, opacity: 1, scale: 1, delay: 0.6, ease: Power2.easeOut }, -0.02)

                    var nextslidetitle = new TimelineLite();
                    nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title span'), 0.5, { scale: 0.9, x: 100, opacity: 0, ease: Power2.easeInOut }, -0.02)
                    var nextslidecaption = new TimelineLite();
                    nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.5, { x: 20, opacity: 0, delay: 0.3, ease: Power2.easeIn }, -0.02)
                }
            }
        };

        var swiper = new Swiper('.swiper-container', swiperOptions);

        $('.swiper-pagination-bullet .title').each(function () {
            var words = $(this).text().slice(" ");
            var total = words.length;
            $(this).empty();
            for (index = 0; index < total; index++) {
                $(this).append($("<span /> ").text(words[index]));
            }
        });

    };

    var albumDesignRouter = function () {

        $("#book").flipBook({
            backgroundColor: "#1c1f22",
            pdfUrl: "lib/albums/sophie/print.pdf",
            skin: 'dark',
            btnToc: false,
            btnThumbs: false,
            btnDownloadPages: false,
            btnDownloadPdf: false,
            btnPrint: false,
            btnExpand: false,
            btnShareIfMobile: true,
            pinterest: false,
            email: false,
            btnDownloadPagesIfMobile: false,
            btnDownloadPdfIfMobile: false,
        });

        var mmenuActive = false;

        $('.hamburger').click(function () {
            mmenuActive = !mmenuActive;
            $(this).toggleClass('is-active', mmenuActive);
            $('.bt-nav').toggleClass('expanded', mmenuActive);
        });

    };

    var galleryRouter = function () {

        if ($('.filter a').length > 0) {
            var activeCat = $('.filter a').eq(0).data('class');
            $(activeCat).show();

            $('.filter a').click(function () {
                activeCat = $(this).data('class');
                $('.masonry-panel').hide();
                $(activeCat).show();
                $('.filter a').removeClass('selected');
                $(this).addClass('selected');
            });
        } else {
            $('.masonry-panel').show();
        }

        var mmenuActive = false;

        $('.hamburger').click(function () {
            mmenuActive = !mmenuActive;
            $(this).toggleClass('is-active', mmenuActive);
            $('.bt-nav').toggleClass('expanded', mmenuActive);
            $('.shadetoggle').toggleClass('dark', !mmenuActive);
        });

    };

    var aboutRouter = function () {

        if ($(window).width() < 768) {
            $('.logoimg').addClass('shadetoggle');
            $('.logoimg').addClass('dark');
        }

        var mmenuActive = false;

        $('.hamburger').click(function () {
            mmenuActive = !mmenuActive;
            $(this).toggleClass('is-active', mmenuActive);
            $('.bt-nav').toggleClass('expanded', mmenuActive);
            $('.shadetoggle').toggleClass('dark', !mmenuActive);
        });

    };

    var contactRouter = function () {

        if ($(window).width() < 768) {
            $('.hamburger-box').addClass('shadetoggle');
            $('.hamburger-box').addClass('dark');
        }

        var mmenuActive = false;

        $('.hamburger').click(function () {
            mmenuActive = !mmenuActive;
            $(this).toggleClass('is-active', mmenuActive);
            $('.bt-nav').toggleClass('expanded', mmenuActive);
            $('.shadetoggle').toggleClass('dark', !mmenuActive);
        });

    };

    var albumRouter = function (params) {

        if ($('.filter a').length > 0) {
            var activeCat = $('.filter a').eq(0).data('class');
            $(activeCat).show();

            $('.filter a').click(function () {
                activeCat = $(this).data('class');
                $('.masonry-panel').hide();
                $(activeCat).show();
                $('.filter a').removeClass('selected');
                $(this).addClass('selected');
            });
        } else {
            $('.masonry-panel').show();
        }

        var mmenuActive = false;

        $('.hamburger').click(function () {
            mmenuActive = !mmenuActive;
            $(this).toggleClass('is-active', mmenuActive);
            $('.bt-nav').toggleClass('expanded', mmenuActive);
            $('.shadetoggle').toggleClass('dark', !mmenuActive);
        });

    };

    var router = new Navigo();

    router
        .on({
            '/': indexRouter,
            '/albumdesign': albumDesignRouter,
            '/gallery': galleryRouter,
            '/about': aboutRouter,
            '/contact': contactRouter,
            '/album/*': albumRouter
        });

    router.resolve();

});