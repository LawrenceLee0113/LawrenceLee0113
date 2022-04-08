$(document).ready(function () {
    $("#test").click(function (e) { 
        $.ajax({
            type: "get",
            url: "/content/sss",
            data: {},
            dataType: "html",
            success: function (response) {
                $("#testText").html(response); 
            }
        });
        
    });
});