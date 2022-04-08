var menuMode = 1;
function doanimation(i){
        if(i == 0){//off
            $(".menu").animate({
                width:"0px"

            })
            $(".content").animate({
                // margin: "0px 0px 0px 100px",
                // width: "1300px"

            },function(){

                $(".menu").hide();
            })
            return 1;
        }else if(i == 1){//on
            $(".menu").animate({
                width:"240px"

            })
            $(".content").animate({
                margin: "0px 0px 0px 240px",
                width: "1200px"
            },function(){
                $(".menu").show();

            })
            $(".menu").show();

            return 0;
        }else{
            alert("unknown error");
        }
    }
$(document).ready(function () {
    menuMode = doanimation(1);
    
    $(".menu-btn a").click(function (e) { 
        e.preventDefault();

        menuMode = doanimation(menuMode);
    });
    $(".menu-content-item a").click(function (e) { 
        e.preventDefault();

        var href = $(this).attr("href");
// alert(href)
        // menuMode = doanimation(0);
        $("#contentIframe").attr("src",href);

        
    });
    
    $("#menu-btn").mouseenter(function () { 
        // $("#menu-btn-icon").attr("name","caret-forward-sharp");
    });

    $(".side-menu-btn").mouseenter(function () { 
        menuMode = doanimation(1);
        
    });
    $(".content").mouseenter(function () { 
        menuMode = doanimation(0);
        
    });
});