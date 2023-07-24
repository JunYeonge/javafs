import java.util.ArrayList;

public class ex1 {
    public static void main(String[] args) {
        // Integer 타입의 요소를 담을 수 있는 ArrayList 생성
        ArrayList<Integer> numberList = new ArrayList<>();

        // ArrayList에 숫자 추가하기
        numberList.add(5);
        numberList.add(10);
        numberList.add(15);
        numberList.add(20);
        numberList.add(25);

        // ArrayList의 크기 확인하기
        int size = numberList.size();
        System.out.println("ArrayList의 크기: " + size);

        // ArrayList의 모든 요소 출력하기
        System.out.println("ArrayList의 요소:");
        for (int i = 0; i < size; i++) {
            int number = numberList.get(i);
            System.out.println(number);
        }

        // 특정 위치에 요소 추가하기
        numberList.add(1, 12); // 인덱스 1에 12 추가

        // 변경된 ArrayList의 요소 출력하기
        System.out.println("변경된 ArrayList의 요소:");
        for (int number : numberList) {
            System.out.println(number);
        }

        // 특정 요소 삭제하기
        numberList.remove(3); // 인덱스 3의 요소 삭제

        // 변경된 ArrayList의 요소 출력하기
        System.out.println("변경된 ArrayList의 요소:");
        for (int number : numberList) {
            System.out.println(number);
        }

        // ArrayList가 비어있는지 확인하기
        boolean isEmpty = numberList.isEmpty();
        System.out.println("ArrayList가 비어있는지 여부: " + isEmpty);

        // ArrayList에서 요소 검색하기
        int index = numberList.indexOf(20);
        if (index != -1) {
            System.out.println("숫자 20은 ArrayList의 인덱스 " + index + "에 있습니다.");
        } else {
            System.out.println("숫자 20을 찾지 못했습니다.");
        }
    }
}
