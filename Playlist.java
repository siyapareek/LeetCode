import java.util.Scanner;

public class Playlist {
    public static void main (String[] args) throws java.lang.Exception{
        Scanner RR=new Scanner(System.in);
        int T=RR.nextInt();
        while(T-->0){
            int each_song_duration=RR.nextInt();
            int journey_time=RR.nextInt();
            int res=journey_time*3;
            System.out.println(each_song_duration/res);
        }
    }
}
