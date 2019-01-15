$(document).ready(function () {
    var imgs = $('.gallery-tips img').length;
    for (var i = 0; i < imgs; i++) {
        $('.gallery-tips img').eq(i).attr('data-index', i+1);
    }
    var arrowleft = $('.arrow.left'),
        arrowright = $('.arrow.right'),
        mainScreen = $('img.main-img');
    for (var i = 1; i <= imgs; i++) {
        showSlide(i);
    }


    function showSlide(imgName) {
        $('.gallery-tips img[src="./img/tip' + imgName + '.jpg"]').click(function () {
            var thisSrc = "./img/large" + imgName + ".jpg";
            $('.gallery-tips img.cur').removeClass('cur');
            $(this).addClass('cur');
            mainScreen.attr('src', './img/large' + imgName + '.jpg');
            mainScreen.attr('alt', 'large' + imgName);
            showArrows(imgName);
        });
    }


    arrowleft.click(function () {
        var curEl = $('.gallery-tips img.cur').data('index'),
            prev = parseFloat(curEl) - 1;

                    $('.gallery-tips img.cur').removeClass('cur');
                    $('.gallery-tips img[src="./img/tip' + prev + '.jpg"]').addClass('cur');
                    mainScreen.attr('src', './img/large' + prev + '.jpg');
                    mainScreen.attr('alt', 'large' + prev);
                    showArrows(prev);
    });



    arrowright.click(function () {
        var curEl = $('.gallery-tips img.cur').data('index'),
            next = parseFloat(curEl) + 1;
                    $('.gallery-tips img.cur').removeClass('cur');
                    $('.gallery-tips img[src="./img/tip' + next + '.jpg"]').addClass('cur');
                    mainScreen.attr('src', './img/large' + next + '.jpg');
                    mainScreen.attr('alt', 'large' + next);
                    showArrows(next);
    });



    function showArrows(imgName) {
        if (imgName == 1) {
            arrowleft.hide(300);
        } else {
            arrowleft.show(300);
        }
        if (imgName == imgs) {
            arrowright.hide(300);
        } else {
            arrowright.show(300);
        }
    }



    mainScreen.on('load', function () {
        if ($(this).parent().hasClass('error')) {
            $(this).parent().removeClass('error');
        }
    });
    mainScreen.on('error', function () {
        $(this).parent().addClass('error');
        $(this).attr('alt', 'Файл не найден!');
    });

});
