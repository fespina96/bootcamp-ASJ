package project;

public class Superheroe {
	private String nombre;
	private String desc;
	private boolean capa;
	
	public Superheroe(String nombre) {
		this.nombre = nombre;
		this.desc = "";
		this.capa = false;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public boolean isCapa() {
		return capa;
	}

	public void setCapa(boolean capa) {
		this.capa = capa;
	}

	@Override
	public String toString() {
		return "Superheroe [nombre=" + nombre + ", desc=" + desc + ", capa=" + capa + "]";
	}
		
	
}
