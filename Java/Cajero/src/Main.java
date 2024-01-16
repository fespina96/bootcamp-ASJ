import java.util.Scanner;
import java.util.concurrent.TimeUnit;

public class Main {

	static float saldo = 10000;
	static String movimientos = "";
	
	public static void main(String[] args) {

		int input = 0;
		Scanner scanner = new Scanner(System.in);
		float monto = 0;
		do {
			System.out.println("Seleccione una operación:\n1- Extraer\n2- Depositar\n3- Consultar saldo\n4- Ver últimos movimientos\n5- Salir");
			input = scanner.nextInt();
			
			switch(input) {
				case 1:
					System.out.println("Ingrese monto a extraer:");
					monto = scanner.nextFloat();
					extraer(monto);
					break;
				case 2:
					System.out.println("Ingrese monto a depositar:");
					monto = scanner.nextFloat();
					depositar(monto);
					break;
				case 3:
					consultarSaldo();
					break;
				case 4:
					verMovimientos();
					break;
				case 5:
					System.out.println("Gracias por operar con nosotros.");
					break;
				default:
					System.out.println("Ingrese un número de operación valido.");
					break;
			}
			try {
				TimeUnit.SECONDS.sleep(3);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}while(input!=5);
		
		scanner.close();
	}
	
	public static void extraer(float monto) {
		if(monto<=saldo) {
			saldo-=monto;
			System.out.println("Ha extraido $"+monto+" su saldo es $"+saldo);
			movimientos=movimientos+"Extracción - $"+monto+"\n";
		}else {
			System.out.println("Error al extraer fondos, revise su saldo.");
		}
	}
	
	public static void depositar(float monto) {
		if(monto>=0) {
			saldo+=monto;
			System.out.println("Ha depositado $"+monto+" su saldo es $"+saldo);
			movimientos=movimientos+"Deposito - $"+monto+"\n";
		}else {
			System.out.println("Error al depositar fondos, revise el monto.");
		}
	}
	
	public static void consultarSaldo() {
		System.out.println("Su saldo es $"+saldo);
	}
	
	public static void verMovimientos() {
		System.out.println("Últimos movimientos: ");
		System.out.println(movimientos);
	}
	
	

}
