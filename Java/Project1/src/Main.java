import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scanner = new Scanner(System.in);
		int input1 = Integer.parseInt(scanner.nextLine());
		String output = "";
		if((input1>=0) & (input1<=500)) {
			String loopOutput="";
			for(int x=1;x<=input1;x++) {
				String input2 = scanner.nextLine();
				
				List<String> list = Arrays.asList(input2.split(" "));

				int a = Integer.parseInt(list.get(0));
				int b = Integer.parseInt(list.get(1));
				int n = Integer.parseInt(list.get(2));
				
				if(((a>=0) & (a<=50))&((b>=0) & (b<=50))&((n>=1) & (n<=15))) {
					for(int y=0;y<=n-1;y++) {
						a+= (b*Math.pow(2, y));
						loopOutput+=a+" ";
					}
				}
			}
			output+=loopOutput+"\r\n";
		}
		scanner.close();
		System.out.println(output);

	}

}
