$(document).ready(function () {
    $("#submit").click(function (e) { 
        var val = $("#text").val();
        
        if(val = ""){//get
            $.ajax({
                type: "get",
                url: "/go/"+val,
                data: {},
                dataType: "html",
                success: function (response) {
                    alert(response);
                }
            });

        }else if(val = "DEL"){//del
            $.ajax({
                type: "DELETE",
                url: "/go/"+"1",
                data: {},
                dataType: "html",
                success: function (response) {
                    alert(response);
                }
            });
        }else if(val != ""){//put
            $.ajax({
                type: "PUT",
                url: "/go/"+val,
                data: {},
                dataType: "html",
                success: function (response) {
                    alert(response);
                }
            });
        }else{//post

        }
    });
});