function aaa(){
    var i = 5;
    console.log("i = " + i);
    console.log("type i = " + typeof i);
    console.log("i = null");
    i = null;
    console.log("typeof i = " + typeof i);
    
    console.log("----");

    var j = 5;
    console.log("j = " + j);
    console.log("type j = " + typeof j);
    console.log("j = undefined");
    j = undefined;
    console.log("typeof j = " + typeof j);

    console.log("---");

    console.log("typeof undefined = " + typeof undefined);
    console.log("typeof null = " + typeof null);
}
function onclickButton(){
    document.getElementById("xxx").innerHTML = "This is onclick";
}
function onchangeButton(){
    document.getElementById("xxx").innerHTML = "This is onchange";
}
function onmouseoverButton(){
    document.getElementById("xxx").innerHTML = "This is onmouseover";
}
function onmouseoutButton(){
    document.getElementById("xxx").innerHTML = "This is onmouseout";
}
function onkeydownButton(){
    document.getElementById("xxx").innerHTML = "This is onkeydown";
}
    var a = new Date();
function bbb(){var car = ["bens","toyota","honda","BNW","mazda"];
for(let i of car){
	console.log(i);
}

}

function test(){
    console.log(a);
}