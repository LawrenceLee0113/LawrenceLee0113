$(document).ready(function () {
    $("#lab1").click(function () { 
        $("#contain").slideToggle();
    });
    $("#lab2").click(function () { 
        $("#contain2").slideDown();
    });
    $("#lab3").click(function () { 
        $("#contain3").slideUp();
    });
    $("#lab4").click(function () { 
        $("#lab5").toggle();
        
    });
    $("#startAnimate").click(function () { 
        $("#primg").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
          });
    });
});