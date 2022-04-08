var menuMode = 1;
function doanimation(i) {
  if (i == 0) {//off
    $(".menu").animate({
      width: "0px"

    },function(){
      $(".menu").hide();

    })
    return 1;
  } else if (i == 1) {//on
    $(".menu").animate({
      width: "180px"

    })
    $(".menu").show();

    return 0;
  } else {
    alert("unknown error");
  }
}
function addPage(href, mode = 0) {//add tag-div to contentText
  var content = $(".contentText").children("div");

  let hrefName = href.slice(0, -5);
  let hrefPageId = hrefName + "-page";

  let gate = true;
  $.each(content, function (i, v) {
    var $vj = $(v);
    var vjId = $vj.attr("id");


    if (vjId == hrefPageId) {
      gate = false;
    }
  });
  if (gate) {

    $.ajax({
      type: "get",
      url: href,
      dataType: "html",
      success: function (response) {

        var resList = [];

        //  console.log(resList);
        var jqobj = $($.parseHTML(response));

        $.each(jqobj, function (i, v) {
          if (v.nodeName == "DIV") {
            resList.push(v)
          }
          // console.log(v.nodeName);
        });
        if (resList.length == 1) {
          // alert("su");
          // debugger;
          var output = resList[0];

          if (mode == 0) {

            $(output).css("display", "none")
            console.log(output);

            $(".contentText").append(output);
          } else if (mode == 1) {

            var str = $(output).prop('outerHTML');
            console.log(str);
            $(".contentText").append(str);
          }

        } else {
          alert("not corret div tag")
        }

      }
    });
  }
}
function switchPage(id) {
  var content = $(".contentText").children("div");
  $.each(content, function (i, v) {
    var $vj = $(v);
    var vjId = $vj.attr("id");

    if (vjId == id) {
      $vj.show();
      nowPage = id;
      
      // console.log("asdf");

    } else {
      $vj.hide();
    }
  });
}
function loadAllPage() {
  var items = $(".menu-content-item a");
  $.each(items, function (i, v) {

    let href = $(v).attr("href");
    addPage(href);
  });

}
function urlToId(href) {
  return href.slice(0, -5) + "-page"
}
function changeIconStyle(href){
  var $urls = $(".menu-content-item a");
  $.each($urls, function (indexInArray, valueOfElement) { 
    var url = $(valueOfElement).attr("href")
    if(url == href){ 
      console.log("asdf");
      $(valueOfElement).parents(".menu-content-item").css("background-color","rgb(106, 167, 202)");
      var str = $(valueOfElement).find("ion-icon").attr("name");
      if(str.slice(-8)=="-outline"){
        str = str.slice(0,-8)+"";

      }
      
      $(valueOfElement).find("ion-icon").attr("name",str);
    }else{
      $(valueOfElement).parents(".menu-content-item").css("background-color","");
      var str = $(valueOfElement).find("ion-icon").attr("name");
      if(str.slice(-8)!="-outline"){
        str += "-outline";
        $(valueOfElement).find("ion-icon").attr("name",str);
      }
    }

  });
  // $.each(collection, function (indexInArray, valueOfElement) { 
     
  // });
}

var nowPage = "";
$(document).ready(function () {
  menuMode = doanimation(1);//menu default movement

  var defaultPageUrl = "home.html";
  addPage(defaultPageUrl, 1);

  $(".menu-btn a").click(function (e) { //open or close menu animation
    e.preventDefault();

    menuMode = doanimation(menuMode);
  });
  $(".menu-content-item a").click(function (e) { //menu a item
    e.preventDefault();

    var href = $(this).attr("href");

    // addPage(href);
    switchPage(urlToId(href));
    changeIconStyle(href);
    
    // $("#contentIframe").attr("src",href);//iframe work


  });

  $("#menu-btn").mouseenter(function () {
    // $("#menu-btn-icon").attr("name","caret-forward-sharp");
  });

  $(".side-menu-btn").mouseenter(function () { //auto open menu
    menuMode = doanimation(1);

  });
  $(".content").mouseenter(function () { //auto close menu


    menuMode = doanimation(0);

  });
  var time = true;
  $("body").mouseenter(function () {
    if (time) {

      loadAllPage();
    }
    time = false;



  })
});