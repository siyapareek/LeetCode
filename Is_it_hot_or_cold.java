import java.util.Scanner;

public class Is_it_hot_or_cold {
    public static void main (String[] args) throws java.lang.Exception {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        while(T-->0) {
            int temperature  = sc.nextInt();
            String weather;
            weather = temperature>20? "HOT":"COLD";
            System.out.println(weather);
        }
    }
}
