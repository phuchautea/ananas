$(document).ready(function () {
    // Slide hot news at header
    if ($(".hot-news-slide").length) {
        $('.hot-news-slide').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            arrows: true
        });
    }

    var isShowSearch = false;
    $('.group-search').on('shown.bs.collapse', function () {
        isShowSearch = true;
    });

    $('.black-rect-bg').click(function (e) {
        if (isShowSearch) {
            isShowSearch = false;
            $('.group-search').collapse('hide');
        }
    });


    // Main menu
    var timeStart, dt;
    const TIME_DELAY = 500;
    $('.header .dropdown').hover(
        function () {
            timeStart = Date.now();
            setTimeout(function () {
                dt = Date.now() - timeStart;
                if (dt >= TIME_DELAY) {
                    $(this).addClass("open");
                }
            }.bind(this), TIME_DELAY);
        },
        function () {
            timeStart = Date.now();
            $(this).removeClass("open");
        }
    );

    // Mobile main menu
    $(".mobile_menu").slideMobileMenu({
        onMenuLoad: function (menu) {
            // console.log(menu)
            // console.log("menu loaded")
        },
        onMenuToggle: function (menu, opened) {
            // console.log(opened)
        }
    });

    // Product Detail
    // Handle event 'click' to choose Color
    $('.prd-detail-right .cb-color-fixed label').click(function (e) {
        e.preventDefault();
        var link = $(this).attr("data-link");
        if (typeof (link) !== "undefined" && link !== null) {
            window.open(link, "_self");
        }
    });

    //Footer Tree, collapse all tree item
    $('.footer-mobile .footer-tree ul.tree').each(function (i) {
        $(this).toggle(200);

        $(this).parent().find('.caret').addClass('caret-normal');
        $(this).parent().find('.caret').removeClass('caret-active');
        $(this).parent().find('.nav-header').removeClass('orange');
    });
    $('.footer-mobile .tree-toggle').click(function () {
        var isDislay = $(this).parent().children('ul.tree').css('display');
        if (isDislay == 'block') {
            $(this).parent().find('.caret').addClass('caret-normal');
            $(this).parent().find('.caret').removeClass('caret-active');
            $(this).parent().find('.nav-header').removeClass('orange');
        }
        else {
            $(this).parent().find('.caret').addClass('caret-active');
            $(this).parent().find('.caret').removeClass('caret-normal');
            $(this).parent().find('.nav-header').addClass('orange');
        }

        $(this).parent().children('ul.tree').toggle(200);
    });

    // slider Chitiet san pham
    if ($(".prd-detail-slide1").length > 0) {
        $('.prd-detail-slide1').slick({
            infinite: false,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    //News Detail: slider San pham lien quan, Bai viet khac
    if ( $("#productRefNews").length > 0)
    {
        $('#productRefNews').slick({
            // dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    if ( $("#postRefNews").length > 0)
    {
        $('#postRefNews').slick({
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    // Product-detail: slider San pham lien quan, San pham da xem
    if ($("#productRef").length > 0) {
        $('#productRef').slick({
            // dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    if ( $("#productViewed").length  > 0)
    {
        $('#productViewed').slick({
            // dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }
    if ($("#productRefCart").length > 0) {
        $('#productRefCart').slick({
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings:
                    {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });
    }

    // Home: slider San pham pham ban chay
    if ($("#productHotBuy").length > 0) {
        $('#productHotBuy').slick({
            // dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            centerMode: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }
            ]
        });
    }

    $('.tooltip-container').each(function (i) {
        var name = $(this).parent().find('.tooltip_attach');
        // alert(name);
        new jBox('Tooltip', {
            attach: name,
            content: $(this),
            closeOnMouseleave: true
        });
    });


    // Product Detail: slider normal
    $('.prd-detail-slide1 .thumbnail').click(function () {
        var linkImageNormal = $(this).find('.cont-item img').attr('data-img-normal');
        var linkImageLarge = $(this).find('.cont-item img').attr('data-img-large');
        $('.main-img').attr('src', linkImageNormal);
        $('.image-large img').attr('src', linkImageLarge);
    });

    // Product Detail: slider on Model Box
    $('.prd-detail-slide2 .thumbnail').click(function () {
        var linkImageLarge = $(this).find('.cont-item img').attr('data-img-large');
        $('.image-large img').attr('src', linkImageLarge);
    });

    if ($('#zoom').val() == "") {
        new jBox('Modal', {
            addClass: 'jBox-MyClass',
            attach: '#zoom',
            width: '100%',
            // height: '100%',
            overlay: false,
            // title: 'I\'m a basic jBox modal window',
            content: $('.templateGallery'),
            onCreated: function () {
                // this.wrapper.find('.jBox-closeButton').html('<img src="images/icon_close.png">');
                this.wrapper.find('.jBox-closeButton').html('<img src="/wp-content/themes/ananas/fe-assets/images/icon_close.png">');

                setTimeout(function () {
                    $('.prd-detail-slide2').slick({
                        infinite: true,
                        speed: 300,
                        vertical: true,
                        swipe: false,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        centerMode: false,
                        arrows: true
                    });
                }, 100);
            }
        });
    }

    if ($('.slide-banner').length) {
        $('.slide-banner').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false
        });
    }
    if ($('.slide-banner-mobile').length) {
        $('.slide-banner-mobile').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false
        });
    }

    if ($('.slide-collection').length) {
        $('.slide-collection').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: false
        });
    }

    function CheckDeliveryDate() {
        var a = $('#pickSize').find(":selected").val();
        var b = $('#pickQuantity').find(":selected").val();

        if (a != 0 && b != 0) {
            $('.prd-detail-right .info-delivery').fadeIn(500);
            $('.prd-detail-right .divider-2').show();
        }
    }

    $("select").on("changed.bs.select", function (e, clickedIndex, newValue, oldValue) {
        // console.log(this.value, clickedIndex, newValue, oldValue)
        CheckDeliveryDate();
    });

    $('.order-track .step .detail').click(function (e) {
        $('.order-track .step .cont').toggleClass('show');

        var text = $('.order-track .step .detail').text().trim();
        $('.order-track .step .detail').text(text === "Xem chi tiáº¿t!" ? "áº¨n chi tiáº¿t!" : "Xem chi tiáº¿t!");
    });

    if ($('#templatePopupTerms').length > 0)
    {
        new jBox('Modal', {
            addClass: 'jBox-popupTerms',
            attach: '.btn-email-1', //name
            overlay: true,
            isolateScroll: false,
            closeOnClick: false,
            content: $('#templatePopupTerms'),
            onCreated: function() {
                this.wrapper.find('#cb1').click(function(){
                    // if ($('#cb1').is(':checked'))
                    // {
                        $('#templatePopupTerms .btn-yes').toggleClass('disabled');
                    // }
                }.bind(this));

                this.wrapper.find('.btn-no').click(function(){
                    alert('cancel 2');
                    this.close();
                }.bind(this));

                this.wrapper.find('.btn-yes').click(function(){
                    if ($('#cb1').is(':checked'))
                    {
                        alert('dong y 2');
                    }
                }.bind(this));
            }
        });
    }


    $('.share-addthis').hover(
        function () {
            var nameAttr = '[class-at=' + $(this).attr("class-at") + ']';
            $(nameAttr).fadeIn(500);
            $(this).find('.caret').fadeIn(500);
        },
        function () {}
    );
    $('.addthis_inline_share_toolbox').hover(
        function () {},
        function () {
            var nameAttr = '.share-addthis[class-at=' + $(this).attr("class-at") + ']';
            $(this).fadeOut(500);
            $(nameAttr).find('.caret').fadeOut(500);
        }
    );


    $('.news-detail-cont-1 .style-7').click(function(){
        var video =  $(this).find('video').get(0);
        var isPause = video.paused;
        $('.news-detail-cont-1 .style-7 .controller').toggleClass('paused');
        if (isPause) {
            $(this).find('video').css("opacity", 1);
            video.play();
            $('.news-detail-cont-1 .style-7 .controller').hide();
        }
        else
        {
            $(this).find('video').css("opacity", 0.39);
            video.pause();
            $('.news-detail-cont-1 .style-7 .controller').show();
        }
    });

    $('.news-detail-cont .style-8').click(function(){
        var video =  $(this).find('video').get(0);
        var isPause = video.paused;
        $('.news-detail-cont .style-8 .controller').toggleClass('paused');
        if (isPause) {
            $(this).find('video').css("opacity", 1);
            video.play();
            $('.news-detail-cont .style-8 .controller').hide();
        }
        else
        {
            $(this).find('video').css("opacity", 0.39);
            video.pause();
            $('.news-detail-cont .style-8 .controller').show();
        }
    });

    // Mobile: home-buy
    $('.home-buy-mobile .footer-tree ul.tree').each(function (i) {
        $(this).toggle(200);

        $(this).parent().find('.caret').addClass('caret-normal');
        $(this).parent().find('.caret').removeClass('caret-active');
        $(this).parent().find('.nav-header').removeClass('orange');
    });
    $('.home-buy-mobile .tree-toggle').click(function () {
        var isDislay = $(this).parent().children('ul.tree').css('display');
        if (isDislay == 'block') {
            $(this).parent().find('.caret').addClass('caret-normal');
            $(this).parent().find('.caret').removeClass('caret-active');
            $(this).parent().find('.nav-header').removeClass('orange');
        }
        else {
            $(this).parent().find('.caret').addClass('caret-active');
            $(this).parent().find('.caret').removeClass('caret-normal');
            $(this).parent().find('.nav-header').addClass('orange');
        }

        $(this).parent().children('ul.tree').toggle(200);
    });

    $('');
});