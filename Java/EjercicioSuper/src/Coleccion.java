package project;

import java.util.ArrayList;

public class Coleccion {
	private String nombreColeccion;
	private ArrayList<Figura> listaFigura;
	
	public Coleccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
		this.listaFigura =  new ArrayList<Figura>();
	}

	public String getNombreColeccion() {
		return nombreColeccion;
	}

	public void setNombreColeccion(String nombreColeccion) {
		this.nombreColeccion = nombreColeccion;
	}
	
	public void añadirFigura(Figura figura) {
		this.listaFigura.add(figura);
	}
	
	public void subirPrecio(double precio, String id) {
		for (Figura fig: this.listaFigura) {
			if(fig.getCodigo().equals(id)) {
				fig.subirPrecio(precio);
			}
		}
	}

	@Override
	public String toString() {
		StringBuilder str = new StringBuilder();
		str.append("Coleccion= " + this.nombreColeccion);
		for (Figura fig: this.listaFigura) {
			str.append("Figura=" + fig.toString());
		}
		return str.toString();
	}
	
	public ArrayList<Figura> conCapa(){
		ArrayList<Figura> figuritas = new ArrayList<Figura>();
		for (Figura fig: this.listaFigura) {
			if(fig.getSuperheroe().isCapa()) {
				figuritas.add(fig);
			}
		}
		return figuritas;
	}
	
	public Figura masValioso() {
		double precioMax = 0;
		Figura figAux = null;
		for (Figura fig: this.listaFigura) {
			if (fig.getPrecio() > precioMax) {
				precioMax = fig.getPrecio();
				figAux = fig;
			}
		}
		return figAux;
	}
	
	public double getValorColeccion() {
		double total = 0;
		for (Figura fig: this.listaFigura) {
			total += fig.getPrecio();
		}
		return total;
	}
	
	public double getVolumenColeccion() {
		double volumen = 0;
		for (Figura fig: this.listaFigura) {
			volumen += fig.getDimension().getVolumen();
		}
		return volumen + 200;
	}
	
	
}
