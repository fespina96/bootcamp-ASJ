import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.concurrent.ThreadLocalRandom;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Ejercicio 2
//		List<Integer> input = new ArrayList<Integer>();
//		List<Integer> output = new ArrayList<Integer>();
//		
//		Scanner scanner = new Scanner ( System.in );
//		
//		for(int x=1;x<=15;x++) {
//			System.out.println("Ingrese número "+x+" :");
//			input.add(scanner.nextInt());
//		}
//		int countdown = 15;
//		for(int y=1;y<=15;y++) {
//			output.add(input.get(countdown-1));
//			countdown--;
//		}
//		
//		System.out.println(output);
		
		//Ejercicio 3
//		List<Integer> randomArray = new ArrayList<Integer>();
//		List<Integer> orderedArray = new ArrayList<Integer>();
//		
//		for(int x=1;x<=20;x++) {
//			randomArray.add(ThreadLocalRandom.current().nextInt(0,100+1));
//		}
//		
//		for(int y=0;y<randomArray.size();y++) {
//			if(randomArray.get(y)%2==0) {
//				orderedArray.add(randomArray.get(y));
//			}
//		}
//		
//		for(int z=0;z<randomArray.size();z++) {
//			if(randomArray.get(z)%2!=0) {
//				orderedArray.add(randomArray.get(z));
//			}
//		}
//		
//		System.out.println(orderedArray);
		
		//Ejercicio 4
//		int randomNum = 0;
//		int[][] matriz = new int[3][3];
//		List<Integer> numList = new ArrayList<Integer>();
//		for(int x=0;x<3;x++) {
//			for(int y=0;y<3;y++) {
//				do {
//				randomNum = ThreadLocalRandom.current().nextInt(0,100+1);
//				}while(numList.contains(randomNum));
//				numList.add(randomNum);
//				matriz[x][y] = randomNum;
//			}
//		}
//		System.out.println(Arrays.deepToString(matriz));
//		Scanner scanner = new Scanner(System.in);
//		String inputString = "";
//		int inputInt = -1;
//		
//		do {
//			System.out.println("Seleccione fila o columna:");
//			inputString = scanner.nextLine();
//		}while(!inputString.toLowerCase().equals("fila")&&!inputString.toLowerCase().equals("columna"));
//		
//		do {
//		System.out.println("Seleccione número de "+inputString+" a sumar:");
//		inputInt = scanner.nextInt();
//		}while(inputInt>1&&inputInt<3);
//		scanner.close();
//		int sum = 0;
//		if(inputString=="fila") {
//			for(int x=0;x<3;x++) {
//				sum+=matriz[inputInt-1][x];
//			}
//		}else {
//			for(int x=0;x<3;x++) {
//				sum+=matriz[x][inputInt-1];
//			}
//		}
//		
//		System.out.println("El total de la "+inputString+" numero "+inputInt+" es: "+sum);
		
		//Ejercicio 6

//		Scanner scanner = new Scanner(System.in);
//		int input,select = 0;
//		do {
//			
//			System.out.println("Seleccione una operación:\n1-Rellenar matriz\n2-Sumar fila\n3-Sumar columna\n4-Sumar diagonal principal\n5-Sumar diagonal inversa\n6-Media de todos los valores de la matriz\n7-Salir");
//			if(!flag) {System.out.println("Es necesario rellenar la matriz.");}
//			input = scanner.nextInt();
//			switch(input) {
//				case 1:
//						rellenarMatriz();
//					break;
//				case 2:
//						System.out.println("Seleccione fila a sumar: ");
//						select = scanner.nextInt();
//						sumarFila(select);
//					break;
//				case 3:
//						System.out.println("Seleccione columna a sumar: ");
//						select = scanner.nextInt();
//						sumarColumna(select);
//					break;
//				case 4:
//						sumarDiagonal();
//					break;
//				case 5:
//						sumarDiagonalInversa();
//					break;
//				case 6:
//						mediaMatriz();
//					break;
//				case 7:
//					break;
//				default:
//					break;
//			}
//		}while(input!=7);
		
		//Ejercicio 7
//		Scanner scanner = new Scanner(System.in);
//		int inputGender,inputWorking = 0;
//		float inputSalary = 0;
//		int maleCount = 0;
//		int femaleCount = 0;
//		int maleWorkingCount = 0;
//		int femaleWorkingCount = 0;
//		float maleSalarySum = 0;
//		float femaleSalarySum = 0;
//		
//		for(int x=1;x<=10;x++) {
//			System.out.println("Indique Masculino (1) o Femenino (2)");
//			inputGender = scanner.nextInt();
//			
//			if(inputGender == 1) {
//				maleCount++;		
//			}else if(inputGender == 2) {
//				femaleCount++;
//			}
//			
//			System.out.println("Indique Trabaja (1) o No Trabaja (2)");
//			inputWorking = scanner.nextInt();
//			
//			if(inputWorking == 1) {
//				if(inputGender == 1) {
//					maleWorkingCount++;
//				}else if(inputGender == 2) {
//					femaleWorkingCount++;
//				}
//				
//				System.out.println("Indique Salario:");
//				inputSalary = scanner.nextFloat();
//				
//				if(inputGender == 1) {
//					maleSalarySum+=inputSalary;
//				}else if(inputGender == 2) {
//					femaleSalarySum+=inputSalary;
//				}
//			}
//			
//		}
//		scanner.close();
//		
//		System.out.println("Porcentaje hombres: "+(maleCount*100/10));
//		System.out.println("Porcentaje mujeres: "+(femaleCount*100/10));
//		
//		System.out.println("Porcentaje hombres que trabajan: "+(maleWorkingCount*100/maleCount));
//		System.out.println("Porcentaje mujeres que trabajan: "+(femaleWorkingCount*100/femaleCount));
//		
//		System.out.println("Sueldo promedio hombres que trabajan: "+(maleSalarySum/maleWorkingCount));
//		System.out.println("Sueldo promedio mujeres que trabajan: "+(femaleSalarySum/femaleWorkingCount));
		
		//Ejercicio 8
//		System.out.println("Ingrese el mensaje :");
//		Scanner scanner = new Scanner(System.in);
//		String mensaje = scanner.nextLine();
//		scanner.close();
//		
//		String resultado = "";
//		for(char ch:mensaje.toCharArray()) {
//			if(ch!=' ') {
//				int posicionAlfabeticaOriginal = ch - 'a';
//				int posicionAlfabeticaNueva = (posicionAlfabeticaOriginal+3)%27;
//				char nuevoCaracter = (char) ('a'+posicionAlfabeticaNueva);
//				resultado+=nuevoCaracter;
//			}else {
//				resultado+=ch;
//			}
//		}
//		System.out.println("Mensaje cifrado:" + resultado);
		
	}
	
//	static int[][] matrix = new int [4][4];
//	static int sum = 0;
//	static boolean flag = false;
//	private static void rellenarMatriz() {
//		Scanner scanner = new Scanner(System.in);
//		for(int x=0;x<4;x++) {
//			for(int y=0;y<4;y++) {
//				System.out.println("Ingrese número X="+x+" Y="+y+" :");
//				int inputMatrix = scanner.nextInt();
//				matrix[x][y] = inputMatrix;
//				sum+= inputMatrix;
//			}
//		}
//		flag = true;
//	}
//	
//	private static void sumarFila(int filaSum) {
//		if(flag) {
//			int suma = 0;
//			for(int x=0;x<4;x++) {
//				suma+=matrix[filaSum][x];
//			}
//			System.out.println("Total fila "+filaSum+" : "+suma);
//		}
//	}
//	
//	private static void sumarColumna(int columnaSum) {
//		if(flag) {
//			int suma = 0;
//			for(int x=0;x<4;x++) {
//				suma+=matrix[x][columnaSum];
//			}
//			System.out.println("Total fila "+columnaSum+" : "+suma);
//		}
//	}
//	
//	private static void sumarDiagonal() {
//		if(flag) {
//			int suma = 0;
//			for(int x=0;x<4;x++) {
//				suma+=matrix[x][x];
//			}
//			System.out.println("Total diagonal principal : "+suma);
//		}
//	}
//	
//	private static void sumarDiagonalInversa() {
//		if(flag) {
//			int suma = 0;
//			int i=3;
//			for(int x=0;x<4;x++) {
//				suma+=matrix[i][x];
//				i--;
//			}
//			System.out.println("Total diagonal inversa : "+suma);
//		}
//	}
//	
//	private static void mediaMatriz() {
//		if(flag) {
//			System.out.println("Media de la matriz : "+sum/16);
//		}
//	}
}
