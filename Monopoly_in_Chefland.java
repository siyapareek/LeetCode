import java.util.Scanner;

public class Monopoly_in_Chefland {
    public static void main (String[] args) throws java.lang.Exception{
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        for(int i=0;i<t;i++){
            int a=sc.nextInt();
            int b=sc.nextInt();
            int c=sc.nextInt();
            if(a+c<b || a+b<c || b+c<a ) System.out.println("YES");
            else System.out.println("NO");
        }
    }
}
