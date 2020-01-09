
  $(document).ready(function(){

    var highestBox = 0;
        $('.container .column').each(function(){  
                if($(this).height() > highestBox){  
                highestBox = $(this).height();  
        }
    });    
    $('.container .column').height(highestBox);

});