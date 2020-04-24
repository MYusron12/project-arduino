#include <Wire.h>
#include <LiquidCrystal_I2C.h>

int sensorLDR;
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  // put your setup code here, to run once:
  lcd.init();
  lcd.backlight();
}

void loop() {
  // put your main code here, to run repeatedly:
  sensorLDR=analogRead(A0);
  lcd.setCursor(1, 0);
  lcd.print(sensorLDR);
  delay(1000);
  lcd.clear();
}
