$(document).ready(function(){
    $('#search_publication_form').on('click','.search-close',function(e){
        console.log('search reset');
        $('[name="search"]').val('');

        $('#search_publication_form').submit();
    });

    var select = $('#publications').find('select[name="category"]');
    var select_sort = $('#publications').find('select[name="sort"]');

    select.change(function() {
       if($(this).val() !=='') {
           $('#search_publication_form').find('input[name="category"]').val($(this).val());
       } else {
           $('#search_publication_form').find('input[name="category"]').val('');
       }
       $('#search_publication_form').submit();

    });

    select_sort.change(function() {
        if($(this).val() !=='') {
            $('#search_publication_form').find('input[name="sort"]').val($(this).val());
        } else {
            $('#search_publication_form').find('input[name="sort"]').val('');
        }
        $('#search_publication_form').submit();

    });

    $('body').on('click', ".tags-inner .tag", function() {

        var checked_tags = $(".tags-inner .checked");

        checked_tags.each(function(e){
            $(this).find('input').prop('checked',false);
        })

        if ($(this).find('input').is(":checked")) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }

        /* кодга было можно выбирать несколько
        if ($(this).find('input').is(":checked")) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }

         */
        //console.log($(".tags-inner .checked"));
        $('#resources-filter').submit();
    });

    if ($(".tags-inner .checked").length  > 0) {
        $(".tags .reset-tags").fadeTo(100, 1);
    } else {
        $(".tags .reset-tags").fadeTo(100, 0);
    }

    $(".tags .reset-tags").click(function(event) {
        event.preventDefault();
        $(".tags-inner .tag input").prop('checked', false);
        $('#resources-filter').submit();
    });

});

$(document).ready(function(){
    if ($(".news-slider2").length) {
        (function() {
            $(".news-slider2 .grid-x").first().addClass('is-in');
            $('.news-slider2').owlCarousel({
                nav: true,
                dots: false,
                items: 1,
                loop: true,
                autoWidth:false,
                autoHeight:false,
                onTranslate: function() {
                    $(".news-slider2 :not(.active) .grid-x").removeClass('is-in').addClass('is-out');
                    setTimeout(function() {
                        $(".news-slider2 .active .grid-x").removeClass('is-out').addClass('is-in');
                    }, 50);
                },
                onDrag: function() {
                    $(".news-slider2 :not(.active) .grid-x").removeClass('is-in').addClass('is-out');
                },
                onResized: setNewsSliderArrowsPosition,
                margin: 20,
                navText: [
                    '<i class="icon-left-frame"></i>', '<i class="icon-right-frame"></i>'
                ]
            });
            function setNewsSliderArrowsPosition() {
                $(".news-slider2").find('.owl-prev, .owl-next').css('top', $(".news-slider2 img").height());
                setTimeout(function() {
                    $(".news-slider2").find('.owl-prev, .owl-next').css('top', $(".news-slider2 img").height());
                }, 50)
            }
            $(".news-slider2 img").on("load", function() {
                setNewsSliderArrowsPosition();
            });
            setNewsSliderArrowsPosition();
        })();
    }

    $(".fancybox2, a[href$='jpg'], a[href$='png'], a[href$='jpeg'], a[href$='gif']").not(".disablefancy").fancybox({
        buttons: [
            "zoom",
            "close"
        ],
        loop: true,
        btnTpl: {
            arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}" href="javascript:;">' +
                '<i class="icon-left"></i>' +
                "</button>",
            arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}" href="javascript:;">' +
                '<i class="icon-right"></i>' +
                "</button>",
            close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                '<i class="icon-close"> </i>' +
                "</button>",
            zoom:
                '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
                '<i class="icon-zoom-in"> </i> ' +
                '<i class="icon-zoom-out"> </i> ' +
                "</button>",
        },
        lang : 'ru',
        i18n : {
            'ru' : {
                CLOSE       : 'Закрыть',
                NEXT        : 'След',
                PREV        : 'Пред',
                ERROR       : 'При загрузке произошла ошибка',
                PLAY_START  : 'Слайдшоу',
                PLAY_STOP   : 'Остановить слайдшоу',
                FULL_SCREEN : 'Полноэкранный режим',
                THUMBS      : 'Галерея',
                DOWNLOAD    : 'Скачать',
                SHARE       : 'Поделиться',
                ZOOM        : 'Приблизиться'
            }
        }
    });
});

/*header sb slider*/
$(document).ready(function() {
    if ($(".sb-slider").length) {
        (function () {
            $(".sb-slider .grid-x").first().addClass('is-in');
            $('.sb-slider').owlCarousel({
                nav: true,
                dots: false,
                items: 1,
                loop: true,
                autoWidth: false,
                autoHeight: false,
                onTranslate: function () {
                    $(".sb-slider :not(.active) .grid-x").removeClass('is-in').addClass('is-out');
                    setTimeout(function () {
                        $(".sb-slider .active .grid-x").removeClass('is-out').addClass('is-in');
                    }, 50);
                },
                onDrag: function () {
                    $(".sb-slider :not(.active) .grid-x").removeClass('is-in').addClass('is-out');
                },
                onResized: setNewsSliderArrowsPosition,
                margin: 20,
                navText: [
                    '<i class="icon-left-frame"></i>', '<i class="icon-right-frame"></i>'
                ]
            });

            function setNewsSliderArrowsPosition() {
                $(".news-slider2").find('.owl-prev, .owl-next').css('top', $(".sb-slider img").height());
                setTimeout(function () {
                    $(".sb-slider").find('.owl-prev, .owl-next').css('top', $(".sb-slider img").height());
                }, 50)
            }

            $(".sb-slider img").on("load", function () {
                setNewsSliderArrowsPosition();
            });
            setNewsSliderArrowsPosition();
        })();
    }

});

/*vk video */
$(document).ready(function() {
    if($('#vkvideo').length) {

        var isPlay = 0;
        var tag = document.createElement('script');

        //tag.src = "https://vk.com/js/api/videoplayer.js";
        //var firstScriptTag = document.getElementsByTagName('script')[0];
        //firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var $window = $(window);
        var $video_container = $(".full-story_vk"); //
        var $video = $("#vkvideo");

        const vk_iframe = vkvideo;
        const player = VK.VideoPlayer(vkvideo);
        var top = $video_container.offset().top; //
        var offset = Math.floor(top + ($video_container.outerHeight() / 2));

        player.on('inited', function () {
            var time = setInterval(function () {
                    //console.log('player is');
                    let current_time = player.getCurrentTime();
                    let fit_array = [];
                    for (let times of array) {
                        if (Number(current_time) === Number(times)) {
                            fit_array.push(Number(times));
                        }
                    }
                    //console.log('Player status = '+ isPlay);
                    console.log(player.getState());
                    if (fit_array.length && player.getState() === 'playing') {
                        setActiveTimetext(Math.max(...fit_array),false);
                    }


                    return false;

                }
                , 1000)
        })

        let isScrolling = false; // Флаг для отслеживания состояния прокрутки
        $window
            .on( "resize", function() {
                top = $video_container.offset().top;
                offset = Math.floor( top + ( $video_container.outerHeight() / 2 ) );
            } )

            .on( "scroll", function() {
                if (isScrolling) return;
                //console.log('windows='+$window.scrollTop()+'; offset='+offset);
                setTimeout(function() {
                    console.log('is-sticky2');
                    console.log('scrolltop', $window.scrollTop());
                    console.log('offset', offset);
                    $video.toggleClass( "is-sticky", $window.scrollTop() > offset);
                    $('.story-content').toggleClass("is-sticky", $window.scrollTop() > offset);
                    isScrolling = false; // Сбрасываем флаг
                }, 1000); // Задержка в 100 мс

                //$video.toggleClass( "is-sticky", $window.scrollTop() > offset);
                //$('.story-content').toggleClass("is-sticky", $window.scrollTop() > offset);
            });

        /*Клик на элемент содержания */
        $('.story-content_element').click(function(e){
            e.preventDefault();
            let that = $(this).find('.timeline').attr('data-time');

            player.seek(that);
            player.play();

            setActiveTimetext(that,true);
        });

        /* Клик на абзац */
        $('.video-interview_part').click(function(e){
            e.preventDefault();
            let that = $(this).attr('data-time');

            player.seek(that);

            setActiveTimetext(that);
        });


        let times= $('.timeline');
        let array = [];
        times.each(function(index, value){
            array.push($(value).attr('data-time'));
        });

        function playerReady()
        {
            $video = $("#video");
            var time = setInterval(function () {
                    //console.log('player is');
                    let current_time = getCurrentVideoTime();
                    let fit_array = [];
                    for (let times of array) {
                        if (Number(current_time) === Number(times)) {
                            fit_array.push(Number(times));
                        }
                    }
                    console.log('Player status = '+ isPlay);
                    console.log(player.getPlayerState());
                    if (fit_array.length && player.getPlayerState() === 1) {
                        setActiveTimetext(Math.max(...fit_array),false);
                    }


                    return false;

                }
                , 1000)
        }

        function setActiveTimetext(that, scrollTo=false)
        {
            console.log('setActiveTimetext');
            console.log(that);
            if(that !== "undefined" && that !==null) {

                let texttime = $('.video-text[data-texttime="' + that + '"]'); //если есть точно е совпадение
                if (texttime.length) {
                    if ($('#vkvideo').hasClass('is-sticky')) {
                        //texttime[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

                        if(scrollTo) {
                            let offset = texttime.offset().top;
                            window.scrollTo({
                                top: offset - 110,
                                behavior: "smooth"
                            });
                            console.log('2.Player status = ' + isPlay);
                        }

                    }
                    //Установка активности блока расшифровки
                    $('.video-part').removeClass('active')
                    texttime.siblings('.video-part').addClass('active');
                }
                else {
                    //нет точного совпадения. Находим элемент, у которого меньше текущего
                    let texttime_elements = $('[data-texttime]');
                    let texttimes_array = [];
                    texttime_elements.each(function (index, value) {
                        texttimes_array.push(Number($(value).attr('data-texttime')));
                    });
                    let need_elements = texttimes_array.filter(function (number) {
                        return Number(number) <= Number(that);
                    });
                    let min_need_element = Math.max(...need_elements);

                    //Если min_need_element получен, то выбираем нужный элемент. Если нет, то переходим к первому
                    if (typeof (min_need_element) !== "undefined" && min_need_element !== null) {
                        setActiveTimetext(min_need_element);
                    } else {
                        let first_time_element = $('[data-texttime]').first().attr('data-texttime');
                        setActiveTimetext(first_time_element);
                    }

                }

            }

        }

        function getCurrentVideoTime()
        {
            //console.log('plaery status = '+player.data);
            let current_time = player.getCurrentTime();
            current_time = Math.round(current_time);
            return current_time;

        }


    }
})
