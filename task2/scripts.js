 var globalTotal = 0,
     curBuy = {
         title: '',
         art: '',
         pic: '',
         price: 0,
         quant: 0,
         total: 0
     };
 $(document).ready(function () {

     $('.toggle').click(function () {
         $('.cart table').toggleClass('vis');
     });


     $('.cat-item [data-buy]').click(function () {
         var thisCard = $(this).parents('.cat-item');
         curBuy.title = thisCard.find('.title').text();
         curBuy.art = thisCard.find('.art').text();
         curBuy.pic = thisCard.find('img').attr('src');
         curBuy.price = Number(thisCard.find('.price span').text()).toFixed(2);
         curBuy.quant = parseFloat(thisCard.find('.quant input').val());
         curBuy.total = Number(curBuy.price * curBuy.quant).toFixed(2);
         if ($('.pos[data-art="' + curBuy.art + '"]').length) {
             var existQuant = $('.pos[data-art="' + curBuy.art + '"] .quant span').text();
             existQuant = +existQuant + curBuy.quant;
             $('.pos[data-art="' + curBuy.art + '"] .quant span').text(existQuant);
             var existTotal = existQuant * Number(curBuy.price).toFixed(2);
             $('.pos[data-art="' + curBuy.art + '"] .summ span').text(existTotal);
             console.log(existQuant, existTotal);
         } else {
             $('<tr class="pos" data-art="' + curBuy.art + '"><td class="pic"><img src="' + curBuy.pic + '" alt="' + curBuy.title + '"></td><td class="title">' + curBuy.title + '</td><td class="art">' + curBuy.art + '</td><td class="price"><span>' + curBuy.price + '</span> р.</td><td class="quant"><span>' + curBuy.quant + '</span> шт.</td><td class="summ"><span>' + curBuy.total + '</span> р.</td><td><button class="del">Удалить</button></td></tr>').insertBefore($('.cart table tbody .empty'));
         }

         globalTotal = globalTotal + +curBuy.total;
         dataUpd();
     });
     
         $('.cart table').on('click', '.pos .del', function () {
             var curRow = $(this).parents('.pos');
             var existTotal = curRow.find('.summ span').text();
             globalTotal = globalTotal - Number(existTotal);
             curRow.remove();
             dataUpd();
         });
    


 });

 function dataUpd() {
     $('.totalsumm .summbox span').text(Number(globalTotal).toFixed(2));
     $('.total .carttotal').text(Number(globalTotal).toFixed(2));
     if (!$('.cart table').hasClass('vis')) {
         $('.cart table').addClass('vis');
     };
 }
