#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <DS3231.h>
#include <Wire.h>
LiquidCrystal_I2C lcd(0x27, 16, 12);
DS3231 rtc(SDA, SCL);
Time t;
const int buzzer = 8;
int Hour;
int Min;
int Sec;
void setup() {
  pinMode(buzzer, OUTPUT);
  Serial.begin(115200);
  rtc.begin();
  lcd.init();
  lcd.backlight();
  rtc.setDate(25, 5, 2020);
  rtc.setTime(06, 59, 49);
  rtc.setDOW(2);
}
void tampilkan(String atas){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(atas);
  lcd.setCursor(0, 1);
  lcd.print("Jam: ");
  lcd.setCursor(5, 1);
  lcd.print(rtc.getTimeStr());
  delay(100);
}
void loop() {
  tampilkan(rtc.getDOWStr());
  if(rtc.getDOWStr()=="Tuesday"){
    t = rtc.getTime();
    Hour = t.hour;
    Min = t.min;
    Sec = t.sec;
    if(Hour == 7 && Min == 00 && Sec == 00){
      tampilkan("Jam pelajaran 1");
      digitalWrite(buzzer, HIGH);
      delay(1000);
      digitalWrite(buzzer, LOW);
      delay(500);
      digitalWrite(buzzer, HIGH);
      delay(1000);
      digitalWrite(buzzer, LOW);
    }
  }
}
