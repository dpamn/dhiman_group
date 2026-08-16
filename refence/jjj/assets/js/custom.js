$(document).ready(function(){
    $('.products-toggle').hide();
});

function showProducts(){
    $('.products-toggle').show();
    $('#more').hide();
}

function hideProducts(){
    $('.products-toggle').hide();   
    $('#more').show();
}


jQuery(document).ready(function ($) {
    $("#product-flters li").click(function () {
        $("#product-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        //console.log($(this).get(0).innerText);
        document.getElementById('more').onclick();
        var selectedFilter = $(this).data("filter");
        $("#product-wrapper").fadeTo(100, 0);
    
        $(".product-item").fadeOut().css('transform', 'scale(0)');
    
        setTimeout(function () {
          $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
          $("#product-wrapper").fadeTo(300, 1);
        }, 300);
        if($(this).get(0).innerText == "ALL"){
          document.getElementById('less').onclick();
          $('#less').show();
        }
        else if($(this).get(0).innerText == "PRODUCTS" ||$(this).get(0).innerText == "MANUFACTURING SERVICES"){
          $('#less').hide();
        }
      });
    });