function checkValueOK(){
    var inputValue = $("#inputArea").children(".inputItem").children("input");
    var bl = true;
    var _val = 1;
    $.each(inputValue, function (index, value) { 
        var a = $(value).val();
        if(index == 0){
            if(a == "" || 
            a == null || 
            a == "0"){
                _val = "0";
            }else{
                _val = a;
            }
        }else if(index == 1){
            
                if(a == "" || 
                a == null || 
                a == "0"){
                    _val = "0";
                }else{
                    _val = parseInt(_val) * parseInt(a);
                }
        }else if(index == 2){
            if(_val != "0"){
                console.log(_val);
                $("#revenue").val(_val);
            }else{
                if (a == "" || 
            a == null || 
            a == "0"){
                bl = false;
            }
            }
        }else{
            
            if (a == "" || 
            a == null || 
            a == "0"){
                bl = false;
            }
        }
        
         
    });
    return bl;
}
function changeType(id){
    return parseFloat($(id).val());
}
function printStr(str,value){
    var output = "\n<label>" + str + "： " + value + "</label></br>";
    $("#outputStr").append(output);
}
function printStr2(str){
    var output = "\n<label>" + str + "</label></br>";
    $("#outputStr").append(output);
}
$(document).ready(function () {
    $("#countingBtn").click(function () { 
        if(checkValueOK()){
            var grossMargin = changeType("#grossMargin") / 100;
            // 日毛利
            var grossProfit = changeType("#revenue") * grossMargin
            // 月毛利
            var monthGrossProfit = changeType("#revenue") * grossMargin * changeType("#workingDayOfMonth");

            // 日人事成本
            var PeoplePay = changeType("#peopleAmount") * changeType("#hourPay") * changeType("#workingHourOfDay");
            // 月人事成本
            var monthPeoplePay = changeType("#peopleAmount") * changeType("#hourPay") * changeType("#workingHourOfDay") * changeType("#workingDayOfMonth");

            // 日營收
            var Revenue = changeType("#revenue");
            // 月營收
            var monthRevenue = changeType("#revenue")*changeType("#workingDayOfMonth");
            
            //月營業利益
            var monthOperatingProfit = monthGrossProfit - changeType("#vendorRent") - monthPeoplePay;
            //日營業利益
            var operatingProfit = (monthGrossProfit - changeType("#vendorRent") - monthPeoplePay) / changeType("#workingDayOfMonth");
            //營業利益率 
            var operatingProfitRatio = monthOperatingProfit / monthRevenue;

        }
        $("#outputStr").empty();
        printStr("日毛利",grossProfit);
        printStr("月毛利",monthGrossProfit);
        printStr("日人事成本",PeoplePay);
        printStr("月人事成本",monthPeoplePay);
        printStr("日營收",Revenue);
        printStr("月營收",monthRevenue);
        printStr("月營業利益",monthOperatingProfit);
        printStr("日營業利益",operatingProfit);
        printStr("營業利益率",Math.round(operatingProfitRatio*1000)/10 + "%");


        var day = Math.ceil(changeType("#totalCost") / operatingProfit)
        printStr2("在工作 " + day + " 天後能回本")
    });
});