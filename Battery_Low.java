import java.util.Scanner;

public class Battery_Low {
    public static void main (String[] args) throws java.lang.Exception
    {
        Scanner sc= new Scanner(System.in);
        int t=sc.nextInt();
        while(t--!=0)
        {
            int x=sc.nextInt();
            if(x<=15)
            {
                System.out.println("YES");
            }
            else
            {
                System.out.println("NO");
            }
        }
    }
}
