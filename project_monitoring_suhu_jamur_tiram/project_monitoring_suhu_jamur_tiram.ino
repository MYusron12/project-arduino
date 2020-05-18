#include "DHT.h"
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
#define DHTPIN A0
#define DHTTYPE DHT11
LiquidCrystal_I2C lcd(0x27, 16, 2);
DHT dht(DHTPIN, DHTTYPE);

float t;
float h;
void setup() {
  // put your setup code here, to run once:
  dht.begin();
  lcd.init();
  lcd.backlight();
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  t = dht.readTemperature();
  h = dht.readHumidity();
  if(t>=0 && t<=28){
    digitalWrite(3, HIGH);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);
  } else if(t>=29 && t<=31){
    digitalWrite(3, LOW);
    digitalWrite(4, HIGH);
    digitalWrite(5, LOW);
  } else if(t>=32){
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, HIGH);
  }
  lcd.setCursor(0,0);
  lcd.print("Suhu");
  lcd.print(t);
  lcd.print("Kelembaban");
  lcd.print(h);
  delay(200);
  lcd.clear();
}
