#include <DFPlayer_Mini_Mp3.h> //library df palyer
#include <SoftwareSerial.h>
#include <LiquidCrystal_I2C.h>
#include <DS3231.h>
#include <Wire.h>
LiquidCrystal_I2C lcd(0x27, 16, 12);
//pendefinisian library agar bisa dipanggil, 
SoftwareSerial mySerial(2, 3); //di pasangkan ke pin d2, d3
DS3231 rtc(SDA, SCL);
Time t;
int Hour;
int Min;
int Sec;
void setup() {
  mySerial.begin(9600);
  //fungsi pada df player untuk memulai
  mp3_set_serial(mySerial);
  //lakukan delay selama 0,10detik
  delay(10);
  //reset df player sebelum memulai program
  mp3_reset();
  //delay 0,10detik
  delay(10);
  //atur volume dfplayer ke mini mp3
  mp3_set_volume(15);
  //delay 1 detik
  delay(3000);
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
      //fungsi untuk melakukan pemutaran suara pertama
      mp3_play(1);
    }
  }
}
