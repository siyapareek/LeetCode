import java.util.Scanner;

public class Chef_and_Wire_Frames {
    public static void main (String[] args) throws java.lang.Exception
    {
        Scanner s= new Scanner(System.in);
        int t = s.nextInt();
        for( int i=0;i<t;i++)
        {
            int n = s.nextInt();
            int m = s.nextInt();
            int x = s.nextInt();
            int sum= ((2*n)+(2*m))*x;
            System.out.println(sum);
        }
    }
}
