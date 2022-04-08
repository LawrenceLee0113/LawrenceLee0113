var Arr = ["#type1","#type2","#type3","#type4","#type5","#type6"]
var mode = "#type3"
function log(){
    for(let i of Arr){
        if(i == mode){
            $(mode).show();
            continue;
        }
        $(i).hide();
    }
}


$(document).ready(function () {
    log();
    for (let i of Arr){
        console.log(i)
        $("a[href = '" + i + "']").click(function () { 
            mode = i;
            console.log(i);
            log();
        });
    }
    
});
