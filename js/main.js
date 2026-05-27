(function ($) {
    "use strict";

    console.log('%c Eluander J. F. Lopes | Portfólio ', 'background:#21b1f4;color:#fff;padding:4px 10px;border-radius:4px;font-weight:bold;font-size:13px;');
    console.log('%c Última atualização: 27/05/2026 — v2.0 ', 'color:#21b1f4;font-size:11px;');

    // JS Index
    //--------------------------------------------------
    // 1. sticky menu
    // 2. background image
    // 3. tilt js
    // 4. mobile-menu (mean-menu)
    // 5. preloader
    // 6. One Page Nav
    // 7. mobile-menu-sidebar
    // 8. brand active (slick carousel)
    // 9. counter js (via person.init.js)
    // 10. Circular Bars - Knob
    // 11. aos js
    // 12. map js (Leaflet)
    // 13. copyright year dinâmico
    // 14. Animate the scroll to top
    //-------------------------------------------------

    // 1. sticky menu
    // ---------------------------------------------------------------------------
    var wind = $(window);
    var sticky = $("#header-sticky");
    wind.on('scroll', function () {
        var scroll = $(wind).scrollTop();
        if (scroll < 2) {
            sticky.removeClass("sticky-menu");
        } else {
            $("#header-sticky").addClass("sticky-menu");
        }
    });



    // 2. background image
    //---------------------------------------------------------------------------
    $("[data-background]").each(function (){
        $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
    });





    // 4. mobile-menu(mean-menu)
    //---------------------------------------------------------------------------
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
    });



    // 5. preloader
    //---------------------------------------------------------------------------
    $(window).on('load', function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    


    // 6. One Page Nav
    //---------------------------------------------------------------------------
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    // 7. mobile-menu-sidebar
    //---------------------------------------------------------------------------
    $(".mobile-menubar").on("click", function(){
        $(".side-mobile-menu").addClass('open-menubar');
        $(".body-overlay").addClass("opened");
    });
    $(".close-icon").click(function(){
        $(".side-mobile-menu").removeClass('open-menubar');
        $(".body-overlay").removeClass("opened");
    });

    $(".body-overlay").on("click", function () {
		$(".side-mobile-menu").removeClass('open-menubar');
		$(".body-overlay").removeClass("opened");
	});




    // 8. brand active
   //---------------------------------------------------------------------------
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
            // You can unstick at a given breakpoint now by adding:
            // settings: "unstick"
            // instead of a settings object
        ]
    });




    // 9. counter js — inicializado em person.init.js após injeção dinâmica dos elementos




    // 10. Circular Bars - Knob
    // ---------------------------------------------------------------------------

     if (typeof ($.fn.knob) != 'undefined') {

        $('.knob').each(function () {
    
          var $this = $(this),
    
            knobVal = $this.attr('data-rel');
    
    
    
          $this.knob({
    
            'draw': function () {
    
              $(this.i).val(this.cv + '%');
    
            }
    
          });
    
    
          $this.appear(function () {
    
            $({
    
              value: 0
    
            }).animate({
    
              value: knobVal
    
            }, {
    
              duration: 2000,
    
              easing: 'swing',
    
              step: function () {
    
                $this.val(Math.ceil(this.value)).trigger('change');
    
              }
    
            });
    
          }, {
    
            accX: 0,
    
            accY: -150
    
          });
    
        });
    
    }



    // 11. aos js
    // ---------------------------------------------------------------------------
    AOS.init();


    // 12. map js
    // ---------------------------------------------------------------------------
    var map = L.map('mapwrapper').setView([-25.968834, -52.563504], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var greenIcon = L.icon({
        iconUrl: "images/icon/map-marker.png",

        iconSize:     [55, 55], // size of the icon
        // shadowUrl: 'my-icon-shadow.png',
        // shadowSize: [72, 72],
    });

    L.marker([-25.968834, -52.563504], {icon: greenIcon}).addTo(map);



    // 13. copyright year
    // --------------------------------------------------------------------------
    var yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    // 14. Animate the scroll to top
    // --------------------------------------------------------------------------
    // Show or hide the sticky footer button
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 900){
            $('#scroll').fadeIn(1200);
        } else{
            $('#scroll').fadeOut(1200);
        }
    });

    $('#scroll').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



  

})(jQuery);	  