#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#include <DFPlayer_Mini_Mp3.h>
#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3);
LiquidCrystal_I2C lcd(0x27, 16, 2);
const int LED = 13;
const int BB = 7;
const int BC = 8;
int button1 = 0;
int button2 = 0;
int a = 0;
int b = 0;
int c = 0;
int d = 0;
int i = 0;
unsigned long current;

void setup(){
  pinMode(LED, OUTPUT);
  pinMode(BB, INPUT_PULLUP);
  pinMode(BC, INPUT_PULLUP);
  Serial.begin(9600);
  mySerial.begin(9600);
  mp3_set_serial(mySerial);
  delay(1);
  mp3_set_volume(30);
  lcd.init();
  lcd.backlight();
  lcd.setCursor(4, 0);
  lcd.print("Bel Sekolah");
}
void loop(){
  lcd.setCursor(0, 1);
  lcd.print("Murid: ");
  lcd.setCursor(13, 1);
  lcd.print(i);
  button1 = digitalRead(BB);
  button2 = digitalRead(BC);
  if((button1 == LOW) && (button2 == LOW)){
    mp3_play(4);
    delay(3000);
  }
  if(button1 == LOW && b == 0){
    a = 1;
  }
  if(button2 == LOW && a == 0){
    b = 1;
  }
  if(a == 1){
    if(button2 == LOW){
      c == 1;
    } else if(button2 == HIGH && c == 1){
      i += 1;
      mp3_play(1);
      delay(2000);
      c = 0;
      a = 0;
    }
  }
  if(b == 1){
    if(button1 == LOW){
      c = 1;
    } else if(button1 == HIGH && c == 1){
      mp3_play(2);
      delay(2000);
      c = 0;
      b = 0;
    }
  }
  if(millis() > current + 1000){
    current = millis();
    if(a == 1 || b == 1){
      ++d;
      if(d >= 10){
        d = 0;
        a = 0;
        b = 0;
      }
    } else {
      d = 0;
    }
  }
}
