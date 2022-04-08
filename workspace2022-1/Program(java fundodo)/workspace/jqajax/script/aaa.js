$(document).ready(function () {
    
    $.ajax({
        type: "POST",
        url: "xxx.com",
        data: {id: "asdfadsf", password: "123456"},
        dataType: "json",//回傳資料形式
        complete: function(xhr, textStatus){
            //送出
        },
        success: function (data, textStatus, xhr) {
            //回傳成功
        },
        error: function(xhr, textStatus,errorThrown){
            //失敗
        }
    });
    $.post("xxx.com", 
    {id: "asdfadsf", password: "123456"},
        function (data, textStatus, jqXHR) {
            //success
        },
        "json"KO
    );
    $.get("xxx.com", 
    {id: "asdfadsf", password: "123456"},
        function (data, textStatus, jqXHR) {
            //success
        },
        "json"
    );
    $.post("xxx.com", 
    $("form").serialize(),//name=lawrence&id=lawlaw&...by name
        function (data, textStatus, jqXHR) {
            //success
        },
        "json"
    );
    //data type 可以是html
    
});