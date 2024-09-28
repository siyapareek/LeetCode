import java.util.Scanner;

public class Practice_makes_us_perfect {
    public static void main (String[] args) throws java.lang.Exception
    {
        // your code goes here
        Scanner sc = new Scanner(System.in);
        int[] weeklyProblems = new int[4];
        int successfulWeeks = 0;

        //check if the entered number of the problem solved each week is greater than or equal to 10
        for(int i=0; i<4; i++)
        {
            weeklyProblems[i]= sc.nextInt();
            if (weeklyProblems[i]>=10)
            {
                successfulWeeks++;
            }
        }

        System.out.println(successfulWeeks);

    }
}
