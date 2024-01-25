
public class Cuenta {
	private String titular;
	private float cantidad;
	
	public Cuenta(String tit) {
		this.titular = tit;
		this.cantidad = 0;
	}
	
	public Cuenta(String tit,float cant) {
		this.titular = tit;
		if(cant>0) {
			this.cantidad = cant;
		}else {
			this.cantidad = 0;
		}
		
	}
	
	public String getTitular() {
		return this.titular;
	}
	
	public float getCantidad() {
		return this.cantidad;
	}
	
	public String toString() {
		return "Titular: "+this.titular+"\nCantidad: $"+this.cantidad;
	}
	
	public void setTitular(String tit) {
		this.titular = tit;
	}
	
	public void setCantidad(float cant) {
		if(cant>0) {
			this.cantidad=cant;
		}
	}
	
	public void ingresarCantidad(float cant) {
		if(cant>0) {
			this.cantidad+=cant;
			System.out.println("Se han ingresado $"+cant+", el nuevo total es de $"+this.cantidad);
		}
	}
	
	public void retirarCantidad(float cant) {
		if(cant<=this.cantidad) {
			this.cantidad-=cant;
			System.out.println("Se han retirado $"+cant+", el nuevo total es de $"+this.cantidad);
		}else {
			System.out.println("Cantidad en cuenta insuficiente");
		}
	}
	
	
}
