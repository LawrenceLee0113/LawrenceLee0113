$(document).ready(function () {
    //creat
    $("#addList").click(function () { 
        var listItem = $("#toDoList li").eq(0).clone();
        $("#toDoList").append(listItem);
        $("li .inputItem").hide();
        $("li .btn").hide();
    });
    $("li .inputItem").hide();
    $("li .btn").hide();

    //onlist
    $("ul li").mouseenter(function () { 
        $(this).addClass("chooseOnLi");
    });
    $("ul li").mouseleave(function () { 
        $(this).removeClass("chooseOnLi");
    });

    //btn disappear
    $("ul li").mouseenter(function () { 
        $(this).children(".btn").show();
    });
    $("ul li").mouseleave(function () { 
        $(this).children(".btn").hide();
    });

    //show input
    $("li span").click(function () { 
        var startStr = $(this).html();
        $(this).hide();

        $(".chooseOnLi .inputItem").val(startStr);
        $(".chooseOnLi .inputItem").show();

    });

    //hide input
    $('li .inputItem').keyup(function(e){
        if(e.keyCode == 13)
        {
            var inputStr = $(this).val();
            $(this).hide();

            $(".chooseOnLi .item").html(inputStr);
            $(".chooseOnLi .item").show();
        }
    });
    $("li").on("blur",".inputItem", function () {
            var inputStr = $(this).val();
            $(this).hide();

            $(".chooseOnLi .item").html(inputStr);
            $(".chooseOnLi .item").show();
    });
    //del item
    $("li .btn").click(function () { 
        $(this).parent().remove();        
    });
});