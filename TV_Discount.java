import java.util.Scanner;

public class TV_Discount {
    public static void main (String[] args) throws java.lang.Exception {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while (T-- > 0) {
            int priceTV1 = sc.nextInt();
            int priceTV2 = sc.nextInt();
            int discountTV1 = sc.nextInt();
            int discountTV2 = sc.nextInt();
            int finalPriceTV1 = priceTV1 - discountTV1;
            int finalPriceTV2 = priceTV2 - discountTV2;
            if (finalPriceTV1 < finalPriceTV2) System.out.println("First");
            else if (finalPriceTV2 < finalPriceTV1) System.out.println("Second");
            else System.out.println("Any");
        }
    }
}
