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
  //delay(10);
  //reset df player sebelum memulai program
  mp3_reset();
  //delay 0,10detik
  //delay(10);
  //atur volume dfplayer ke mini mp3
  mp3_set_volume(15);
  //delay 1 detik
  //delay(3000);
  rtc.begin();
  lcd.init();
  lcd.backlight();
  //rtc.setDate(25, 5, 2020);
  rtc.setTime(07, 00, 00);
  rtc.setDOW(1);
}
void tampilkan(String atas){
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print(atas);
  lcd.setCursor(0, 1);
  lcd.print("Jam: ");
  lcd.setCursor(5, 1);
  lcd.print(rtc.getTimeStr());
  delay(500);
}
void loop() {
  tampilkan(rtc.getDOWStr());
  if(rtc.getDOWStr()=="Monday"){
    t = rtc.getTime();
    Hour = t.hour;
    Min = t.min;
    Sec = t.sec;
    if(Hour == 7 && Min == 00 && Sec == 00){
      tampilkan("Jam Pelajaran 1");
      //fungsi untuk melakukan pemutaran suara pertama
      mp3_play(1);
      delay(10000);
    }
    if(Hour == 9 && Min == 00 && Sec == 00){
      tampilkan("Jam Pelajaran 2");
      //fungsi untuk melakukan pemutaran suara kedua
      mp3_play(2);
    }    
    if(Hour == 9 && Min == 40 && Sec == 00){
      tampilkan("Istirahat ke-1");
      //fungsi untuk melakukan pemutaran suara ketiga
      mp3_play(3);
    }
    if(Hour == 10 && Min == 00 && Sec == 00){
      tampilkan("Masuk Kelas");
      //fungsi untuk melakukan pemutaran suara istirahat
      mp3_play(8);
    }
    if(Hour == 10 && Min == 40 && Sec == 00){
      tampilkan("Jam Pelajaran 3");
      //fungsi untuk melakukan pemutaran suara keempat
      mp3_play(4);
    }
    if(Hour == 12 && Min == 00 && Sec == 00){
      tampilkan("Istirahat ke-2");
      //fungsi untuk melakukan pemutaran suara kelima
      mp3_play(5);
    }
    if(Hour == 13 && Min == 00 && Sec == 00){
      tampilkan("Masuk Kelas");
      //fungsi untuk melakukan pemutaran suara istirahat
      mp3_play(8);
    }
    if(Hour == 14 && Min == 10 && Sec == 00){
      tampilkan("Jam Pelajaran 4");
      //fungsi untuk melakukan pemutaran suara keenam
      mp3_play(6);
    }
    if(Hour == 15 && Min == 30 && Sec == 00){
      tampilkan("Pulang Sekolah");
      //fungsi untuk melakukan pemutaran suara pulang
      mp3_play(7);
    }
  }
}
