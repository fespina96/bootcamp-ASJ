import java.util.Random;

public class Persona {

	String nombre = "";
	char sexo = 'H';
	int edad = 0,dni = 0;
	Double peso = (double)0, altura = (double)0;
	
	
	public Persona() {
		this.dni = generarDNI();
	}
	
	public Persona(String nom, int age, char gen) {
		this.nombre = nom;
		this.edad = age;
		this.sexo = gen;
		this.dni = generarDNI();
	}
	
	public Persona(String nom, int age, char gen, Double weigth, Double height) {
		this.nombre = nom;
		this.edad = age;
		this.sexo = gen;
		this.peso = weigth;
		this.altura = height;
		this.dni = generarDNI();
	}
	
	public int calcularMC() {
		Double calc = this.peso/(Math.pow(this.altura,2));
		
		if(calc<20) {
			return -1;
		}if(calc>=20&&calc<=25) {
			return 0;
		}if(calc>25) {
			return 1;
		}else {
			return -2;
		}
	}
	
	public boolean esMayorDeEdad() {
		if(this.edad>=18) {
			return true;
		}else {
			return false;
		}
	}
	
	public String toString() {
		return "Nombre: "+this.nombre+"\nEdad: "+this.edad+"\nSexo: "+this.sexo+"\nPeso: "+this.peso+"\nAltura: "+this.altura;
	}
	
	public int generarDNI() {
		int max = 99999999;
		int min = 1000000;
		Random rand = new Random();
		return rand.nextInt((max-min)+1)+min;
	}
	
	
}
