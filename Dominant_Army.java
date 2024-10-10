import java.util.Scanner;

public class Dominant_Army {
    public static void main (String[] args) throws java.lang.Exception{
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while(T-->0){
            int N1 = sc.nextInt();
            int N2 = sc.nextInt();
            int N3 = sc.nextInt();
            if(N1>(N2+N3)|| N2>(N1+N3) || N3>(N2+N1) ) System.out.println("Yes");
            else System.out.println("No");
        }
    }
}
