//include librari atau masukan librari yg diperlukan, kita memakai lcd I2C, rtc DS3231, arduinonya, dfplayer, mini speaker
#include <LiquidCrystal_I2C.h> #include <DS3231.h> #include <Wire.h>
//definisi persiapan library lcd I2C, rtc DS3231, arduinonya, dfplayer, mini speaker
LiquidCrystal_I2C lcd(0x27, 16, 12); DS3231 rtc(SDA, SCL); Time t;
//persiapan variable pada rtc, buzzer
const int buzzer = 8; int Hour; int Min; int Sec;
//setup program yg akan dijalankan
void setup() { pinMode(buzzer, OUTPUT); Serial.begin(115200); rtc.begin(); 
lcd.init(); lcd.backlight(); rtc.setDate(25, 5, 2020); rtc.setTime(06, 59, 49); rtc.setDOW(2);}
//setup program tampilan lcd dengan nama variable atas yg bertipe string
void tampilkan(String atas){ lcd.clear(); lcd.setCursor(0, 0); lcd.print(atas); lcd.setCursor(0, 1);
lcd.print("Jam: "); lcd.setCursor(5, 1); lcd.print(rtc.getTimeStr()); delay(100); }
//jalankan program, tampilkan output lcd sebelum menjalankan kondisi
void loop() { tampilkan(rtc.getDOWStr());
//jika rtc menunjukan hari tuesday, jalankan programnya
if(rtc.getDOWStr()=="Tuesday"){ t = rtc.getTime();
//stup jam menit detik sesuai variable tampilkan
Hour = t.hour; Min = t.min; Sec = t.sec;
//jika rtc menunjukan pukul 07.00.00 maka tampilkan pelajaran ke 1
if(Hour == 7 && Min == 00 && Sec == 00){ tampilkan("Jam pelajaran 1");
//bunyikan bel (buzzer) 2 kali, selama 1 detik, lalu bunyinya mati selama setengah detik
digitalWrite(buzzer, HIGH); delay(1000); digitalWrite(buzzer, LOW); delay(500);
digitalWrite(buzzer, HIGH); delay(1000); digitalWrite(buzzer, LOW); } } }
