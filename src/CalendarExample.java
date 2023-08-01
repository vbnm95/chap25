import java.util.Scanner;
/*
 * 작성자 : 심준
 * 작성일 : 2023/08/01
 * 교과목 : 프로그래밍 응용
 */

public class CalendarExample {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		int year = 0;
		int month = 0;
		
		while(true) {
			System.out.print("year>>");
			year = scanner.nextInt();
			
			if(year <= 0) {
				System.out.println("년도는 AC(서기) 입니다.");
				break;
			}
				
			System.out.print("month>>");
			month = scanner.nextInt();
			
			if(month >=13 || month <= 0) {
				System.out.println("월은 1월에서 12월까지 있습니다.");
				break;
			}
			
			printMonth(year, month);
			//System.out.println(year + " 년 " + month + " 월 ");
			//System.out.println(printMonth(year, month) + "일이 지났습니다.");
		}
		
		System.out.println("Program End...");
	}
	
	static void printMonth(int year, int month) {
		int[] normalYear = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}; // 평년 월별 일수
		int[] leapYear = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}; // 윤년 월별 일수
		String[] dayOfWeeks = {"SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"};
		int days = 1;
		int dayOfWeek = 1;
		int monthDays = 31;
		
		for(int i=1; i<=year; i++) {
			if((i%4) == 0 && (i%100) != 0 || (i%400) == 0) { // 윤년에 해당하는 경우
				if(i == year) {
					for(int j=0; j<month-1; j++) {
						days += leapYear[j];
					}
					monthDays = leapYear[month-1];
				} else {
					days += 366;
				}
			} else { // 평년에 해당하는 경우
				if(i == year) {
					for(int j=0; j<month-1; j++) {
						days += normalYear[j];
					}
					monthDays = normalYear[month-1];
				} else {
					days += 365;
				}
			}	
		}
		
		dayOfWeek = days%7;
		
		System.out.printf("%10s월 %2s일\n\n", year, month);
		
		// 요일 출력
		for(int i=0; i<7; i++) {
			if(i == 6) {
				System.out.printf("%3s\n", dayOfWeeks[i]);
				break;
			}
			System.out.printf("%3s ", dayOfWeeks[i]);
		}
		
		// 숫자 출력
		int k = 1; // 줄바꿈용
		int d = 0; // 날짜 출력용
		for(int i=0;; i++) {
			if(i<dayOfWeek) {
				System.out.print("    ");
			} else {
				if(k%7 == 0) {
					d++;
					System.out.printf("%3d\n", d);
				} else {
					d++;
					System.out.printf("%3d ", d);
				}
			}
			k++;
			if(d == monthDays)
				break;
		}
		System.out.println('\n');
	}
}
