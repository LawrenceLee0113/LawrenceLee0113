
function printResult(id,header,common,re,str = "",str1 = "",str2 = "",str3 = "",str4 = "",str5 = ""){
    var Arr = [str,str1,str2,str3,str4,str5];
    let output1 = "<hr><h3>" + header +"</h3>";
    let output2 = "</ul>";
    let output3 = "<ul>";
    for(let i of Arr){
        if(i == ""){
            break;
        }
        output3 += "<li>" + re + "  ==  " + i + "  ==>  " + re.test(i) + "</li>";
    }
    let outputTotal = output1 + output3 + output2 + common;
    $("#" + id).append(outputTotal);
}
$(document).ready(function () {
    printResult("type1","量詞1(?)","量詞(?)偵測<b>前</b>一個數為0個或1個",/ab?c/,"ac","abc","abbc");
    printResult("type1","量詞2(*)","量詞(*)偵測0次或多次(包括1次)",/ab*c/,"abc","ac","abbbc");
    printResult("type1","量詞3(+)","量詞(+)偵測1次或多次",/ab+c/,"abc","ac","abbbc");
    printResult("type1","量詞4({min,max})","量詞({min,max})偵測最少min次或最多max次",/ab{5,7}c/,"abbbbbc","abbbbbbbc","abbbbbbbbc");
    printResult("type1","字元4({min,max})","量詞({min,max})偵測最少min次或最多max次",/ab{5,7}c/,"abbbbbc","abbbbbbbc","abbbbbbbbc");
    
    printResult("type2","字元類別1(.) dot","字元. 代表除換行(/n)以外的其他所有字元 #第三個為\\n",/ab.c/,"abic","abtuc","ab\nc","abc")
    printResult("type2","字元類別2([\\S\\s])","代表所有字元 #第三個為\\n",/ab[\s\S]c/,"abic","abtuc","ab\nc","ab c")
    printResult("type2","字元類別3(\\s)","代表空字串、空格、tab、\\n、\\t...但不代表任何其他的 <br>第四個為\\n 第三個為ab c",/ab\sc/,"abic","abc","ab c","ab\nc")
    printResult("type2","字元類別4(\\w)","代表[a-zA-Z0-9_]",/ab\wc/,"abic","ab c","ab\nc","ab9c")
    printResult("type2","字元類別5(\\W)","代表除[a-zA-Z0-9_]以外的字元 等同於[^a-zA-Z0-9_]",/ab\Wc/,"abic","ab c","ab\nc","ab9c")
    printResult("type2","字元類別6(\\d)","代表[0-9] 阿拉伯數字",/ab\dc/,"abic","ab c","ab0c","ab9c")
    printResult("type2","字元類別7(\\D)","代表[^0-9] 非阿拉伯數字",/ab\Dc/,"abic","ab c","ab0c","ab9c")
    printResult("type2","字元類型8(\\S)","代表除\\s以外之字元",/ab\Sc/,"ab d","abdc","ab8c","ab\tc");

    printResult("type3","錨點符號1(^...)","^ 代表以...開頭的字串",/^abc/,"abc ashfi","jabc","a bcafd","abcsdf");
    printResult("type3","錨點符號2(...$)","^ 代表以...結尾的字串",/abc$/," ashfiabc","jabc","a bcafd","sdfabc");
    printResult("type3","錨點符號1(^...)","^身分證驗證練習",/^[ABCDEFG]/,"F131997043","D120482768","F223377075","sdfabc");
    
    
});