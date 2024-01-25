import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		// Ejercicio 1
		
//		Calculadora calc = new Calculadora(0,0);
//		Scanner scanner = new Scanner (System.in);
//		System.out.println("Ingrese numero 1:");
//		calc.setNumero1(scanner.nextFloat());
//		System.out.println("Ingrese numero 2:");
//		calc.setNumero2(scanner.nextFloat());
//		System.out.println("Seleccione operación:\n1-Suma\n2-Resta\n3-Multiplicación\n4-División");
//		int selectInt = scanner.nextInt();
//		switch(selectInt) {
//			case 1:
//				System.out.println(calc.suma());
//				break;
//			case 2:
//				System.out.println(calc.resta());
//				break;
//			case 3:
//				System.out.println(calc.multiplicacion());
//				break;
//			case 4:
//				System.out.println(calc.division());
//				break;
//			default:
//				System.out.println("Error al seleccionar operación.");
//				break;
//		}
		
		//Ejercicio 3
		
//		List<Password> contrasenias = new ArrayList<Password>();
//		int input = 0;
//		Scanner scanner = new Scanner(System.in);
//		System.out.println("Ingrese cantidad de contraseñas a ingresar:");
//		input = scanner.nextInt();
//		
//		if(input>0) {
//			for(int x=1;x<=input;x++) {
//				System.out.println("Ingrese contraseña N°"+x+" :");
//				contrasenias.add(new Password(scanner.nextLine()));
//			}
//		}
//		scanner.close();
//		int count = 0;
//		for(Password contra:contrasenias) {
//			count++;
//			System.out.println("Contraseña N°"+count+": "+contra.getPassword()+" "+(contra.esFuerte()?"Fuerte":"Debil"));
//		}

		//Ejercicio 4
		Scanner scanner = new Scanner(System.in);
		System.out.println("Ingrese Nombre:");
		String nom = scanner.nextLine();
		System.out.println("Ingrese Edad:");
		int edad = scanner.nextInt();
		System.out.println("Ingrese Sexo(H/M):");
		char sexo = (char)scanner.next().charAt(0);
		System.out.println("Ingrese Peso(kg):");
		Double peso = scanner.nextDouble();
		System.out.println("Ingrese Altura(m):");
		Double altura = scanner.nextDouble();
		
		List<Persona> personaList = new ArrayList<Persona>();
		personaList.add(new Persona(nom,edad,sexo,peso,altura));
		
		System.out.println("Ingrese Nombre:");
		String nom2 = scanner.nextLine();
		System.out.println("Ingrese Edad:");
		int edad2 = scanner.nextInt();
		System.out.println("Ingrese Sexo(H/M):");
		char sexo2 = (char)scanner.next().charAt(0);
		scanner.close();
		personaList.add( new Persona(nom2,edad2,sexo2));
		personaList.add( new Persona());
		int count = 0;
		for(Persona p:personaList) {
			count++;
			switch(p.calcularMC()) {
				case -1:
					System.out.println("Persona N°"+count+" debajo de su peso ideal.");
					break;
				case 0:
					System.out.println("Persona N°"+count+" en su peso ideal.");
					break;
				case 1:
					System.out.println("Persona N°"+count+" en sobrepeso.");
					break;
			}
			if(p.esMayorDeEdad()) {
				System.out.println("Persona N°"+count+" es mayor de edad.");
			}else {
				System.out.println("Persona N°"+count+" es menor de edad.");
			}
			
			System.out.println("Persona N°"+count+": "+p.toString());
		}
		
		
		
		
	}

}
