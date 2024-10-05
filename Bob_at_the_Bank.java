import java.util.Scanner;

public class Bob_at_the_Bank {
    public static void main (String[] args) throws java.lang.Exception{
        Scanner s=new Scanner(System.in);
        int n=s.nextInt();
        while(n-->0){
            int a=s.nextInt();
            int b=s.nextInt();
            int c=s.nextInt();
            int d=s.nextInt();
            System.out.println(a+(b-c)*d);
        }
    }
}
