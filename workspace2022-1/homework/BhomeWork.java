import java.util.Scanner;

public class BhomeWork{

    private static String print(String ans){
	Scanner sc = new Scanner(System.in);
	System.out.println(ans);
	String output = sc.next();
	return output;
    }

    private static int printInt(String ans){
	Scanner sc = new Scanner(System.in);
	System.out.println(ans);
	int output = sc.nextInt();
	return output;
    }

    private static String printHint(String ans,String str){
	int A_key = 0;
	int B_key = 0;
	
	char[] ansArr = ans.toCharArray();
	char[] strArr = str.toCharArray();

	String output = "";

	

	    for(int a = 0;a < strArr.length;a++){
		if(ansArr[a] == strArr[a]){
		    A_key ++;
		}else{
		    for(int b = 0;b < ansArr.length;b++){
		        if(ansArr[a] == strArr[b]){
		    	    B_key ++;
			    break;
		        }
	            }
		}
	    }

	    output = "" + A_key + "A" + B_key + "B";

	if(A_key == 4 && B_key == 0){

	    output = "bingo";

	}else{

	    output = "" + A_key + "A" + B_key + "B";

	}
	
	

	
	return output;

    }

    private static void doHint(String ans){
	String str = print("keyin your number:");
	String hint = printHint(ans,str);
	System.out.println(hint);
	if(hint == "bingo"){
	    

	}else{
	    doHint(ans);
	}

    }

    private static boolean whetherRepeat(char[] charArr){
	
	boolean repeat = false;
	for(int i = 0;i<charArr.length;i++){
	    for(int j = 0;j<charArr.length;j++){
	    
		if(charArr[i] == charArr[j] && i != j){
		    repeat = true;
		}
	    }

	}
	return repeat;
    }
    static String ans = "";
    private static void creatAns(){
	 ans = "";

	

	for(int i = 0;i < 4;i++){

	    int num = (int)Math.floor(Math.random()*10);

	    ans+=num;
	}
	
	char[] ans_Arr = ans.toCharArray();

	if(whetherRepeat(ans_Arr)){
	    creatAns();
	}else{

	}
    }

    public static void main(String [] args){
	
	
	creatAns();
	    

	
	System.out.println("ans:" + ans);
	doHint(ans);
	
    }











}