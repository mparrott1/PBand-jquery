$(document).ready(function() {
    
    $("#button1").click(function() {
            $(".steps").slideUp();
            $("#content1").fadeIn(1200);
        
    });

    $("#button2").click(function() {
            $(".steps").slideUp();
            $("#content2").fadeIn(1200);              
    });
    
    $("#button3").click(function() {
            $(".steps").slideUp();
            $("#content3").fadeIn(1200);              
    });
    
    $("#button4").click(function() {
            $(".steps").slideUp();
            $("#content4").fadeIn(1200);              
    });
    
    $("#button5").click(function() {
            $(".steps").slideUp();
            $("#content5").fadeIn(1200);              
    });
    
        $("#forward").click(function(){
                var nextDiv = $(".steps:visible").next(".steps");
                if (nextDiv.length === 0){
                    nextDiv = $(".steps:first");
                }
                $(".steps").hide();
                nextDiv.fadeIn(1000);
        });
    
        $("#previous").click(function(){
            var prevDiv = $(".steps:visible").prev(".steps");
            if (prevDiv.length === 0){
                prevDiv = $(".steps:last");
            }
            $(".steps").hide();
            $("h2").fadeIn(400);
            prevDiv.fadeIn(400);
    });
  
});