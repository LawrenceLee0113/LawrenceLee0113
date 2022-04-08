var aa = 4;

function aaa(){
    for (aa = aa;aa<=10;aa++){
        console.log(aa);
    }
    console.log(aa);
}

//----
{
    var a;
}
//can be used a

//----
{
    let b;
}
//can Not used b

//----
var c = 10;
{
    var c = 8;
    //c is eight.
}
//c is eight

var d = 5;
{
    let d = 9;
    //d = 9
}
//d = 5

let e = 8;
{
    let e = 4;
    e = 4;
}
//e = 8

var f = 4**2;//平方 = 16

var g = (false ? "good" : "bad");
//如果   ^是true那麼這個^否則^這個  

var i = 9;
console.log(i instanceof number);
