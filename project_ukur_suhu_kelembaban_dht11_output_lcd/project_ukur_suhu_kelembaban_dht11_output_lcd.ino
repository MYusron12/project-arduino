#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include "DHT.h"

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
}

void loop() {
  // put your main code here, to run repeatedly:
  t = dht.readTemperature();
  h = dht.readHumidity();
  lcd.setCursor(0, 0);
    lcd.print("Suhu: ");
  lcd.print(t);
  lcd.setCursor(0, 1);
  lcd.print("Kelembapan: ");
  lcd.print(h);
  delay(2000);
  lcd.clear();
}
