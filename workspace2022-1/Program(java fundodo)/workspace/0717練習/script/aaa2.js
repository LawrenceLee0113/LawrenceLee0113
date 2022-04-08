let listItem = '<li>\
<input type = "checkbox"/>\
<span class = "item">lawrence</span>\
<input class = "inputItem"  value = "item">\
<button class = "btn">x</button>\
</li>';
$(document).ready(function () {
    $("#addList").click(function () { 
        $("#toDoList").append(listItem);
        $("li .inputItem").hide();
        $("li .btn").hide();
    });
});