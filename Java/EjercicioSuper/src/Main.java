package project;

public class Main {

	public static void main(String[] args) {
		
		Figura figura1 = new Figura("JKAK22",9000.00,new Dimension(300,400,80),new Superheroe("Batman"));
		Figura figura2 = new Figura("ISID99",800.00,new Dimension(300,400,80),new Superheroe("Joker"));
		Figura figura3 = new Figura("KK202",700.00,new Dimension(300,400,80),new Superheroe("Ironman"));
		Figura figura4 = new Figura("TOK20",300.00,new Dimension(300,400,80),new Superheroe("Hulk"));
		figura1.getSuperheroe().setCapa(true);
		System.out.println(figura1.toString());
		
		Coleccion coleccion = new Coleccion("DC");
		Coleccion coleccion2 = new Coleccion("Marvel");
		
		coleccion.añadirFigura(figura1);
		coleccion.añadirFigura(figura2);
		
		coleccion2.añadirFigura(figura3);
		coleccion2.añadirFigura(figura4);
		
		System.out.println(coleccion.getNombreColeccion());
		System.out.println(coleccion.getValorColeccion());
		
		System.out.println(coleccion.getVolumenColeccion());
	}

}
