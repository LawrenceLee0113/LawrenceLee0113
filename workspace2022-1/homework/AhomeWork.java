import java.util.Scanner;

public class AhomeWork{

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

    private static String printHealthType(double bmi){

	if(bmi < 18.0){
	    return "體重過輕";
	}else if(bmi > 24){
	    return "輕度肥胖";
	}else if(bmi >= 18 &&bmi <= 24){
	    return "正常";
	}else{
	    return "error";
	}

    }

    public static void main(String [] args){
	System.out.println("Start my BMI counting!!");

	int height = printInt("請輸入身高(公分)：");
	int weight = printInt("請輸入體中(kg)：");
	double _bmi = height;
	_bmi = height/100d;
	_bmi = _bmi * _bmi;
	double BMI = weight / _bmi;
	BMI = Math.round(BMI*100.0)/100.0;
	String healthType = printHealthType(BMI);
	System.out.println("您的BMI為:" + BMI + "," + healthType);

    }











}