
public class Calculadora {
	private float numero1,numero2;
	
	public Calculadora(float num1, float num2) {
		this.numero1 = num1;
		this.numero2 = num2;
	}
	
	public float getNumero1() {
		return this.numero1;
	}
	
	public float getNumero2() {
		return this.numero2;
	}
	
	public void setNumero1(float num) {
		this.numero1=num;
	}
	
	public void setNumero2(float num) {
		this.numero1=num;
	}
	
	public float suma() {
		return this.numero1+this.numero2;
	}
	
	public float resta() {
		return this.numero1-this.numero2;
	}
	
	public float multiplicacion() {
		return this.numero1*this.numero2;
	}
	
	public float division() {
		return this.numero1/this.numero2;
	}
}