import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
		
		//Ejercio 1
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Introduzca los 3 angulos del triangulo:");
//		int angle1 = scanner.nextInt();
//		int angle2 = scanner.nextInt();
//		int angle3 = scanner.nextInt();
//		scanner.close();
//		if(angle1+angle2+angle3==180) {
//			System.out.println("Triangulo valido.");
//		}else {
//			System.out.println("Triangulo invalido.");
//		}
		
		//Ejercio 2
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Introduzca el input:");
//		char[] input = scanner.nextLine().toCharArray();
//		scanner.close();
//		Boolean flag = Character.isDigit(input[0]);
//		
//		if(flag) {System.out.println("Número");}else{System.out.println("Letra");}
		
		//Ejercio 3
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Introduzca limite inferior y superior:");
//		int input1 = scanner.nextInt();
//		int input2 = scanner.nextInt();
//		scanner.close();
//		
//		int sum = 0;
//		for(int x=input1;x<=input2;x++) {
//			if(x%2==0) {
//				sum+=x;
//			}
//		}
//		System.out.println("Suma total de los numeros pares entre "+input1+" y "+input2+" : "+sum);
		
		//Ejercio 4
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Introduzca el número:");
//		int input = scanner.nextInt();
//		scanner.close();
//		int i = 1;
//		int sum = 0;
//		while (i<=input/2) {
//			if(input%i==0) {
//				sum+=i;
//			}
//			i++;	
//		}
//		if(input==sum) {
//			System.out.println("El número es perfecto.");
//		}else {
//			System.out.println("El número es imperfecto.");
//		}
		
		//Ejercio 5
		Scanner scanner = new Scanner(System.in);
		System.out.println("Introduzca el largo de la forma:");
		int input = scanner.nextInt();
		scanner.close();
		
		String output = "";
		for(int x=1;x<=input;x++) {
			String line = "";
			if(x%2!=0) {
				for(int y=1;y<=input;y++) {
					line+="* ";
				}
			}else {
				for(int y=2;y<=input;y++) {
					line+=" *";
				}
			}
			output=output+line+"\n";
		}
		
		System.out.println(output);
	}

}
