import java.util.Scanner;

public class Ex4_4 {
    public static void main(String[] args) {
        int score = 0;
        char grade = ' ';
        // 90이상 A 80이상 B 70이상 C  60이상 F
        System.out.printf("점수를 입력하세요.>");
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();

        if(score >= 90) {
            grade = 'A';
        } else if(score >= 80){
            grade = 'B';
        } else if( score >= 70) {
            grade = 'C';
        } else{
            grade = 'F';
        }
    }
}